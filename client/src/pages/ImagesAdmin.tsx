import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ImagesAdmin() {
  const [uploadingId, setUploadingId] = useState<number | null>(null);
  
  const { data: images, isLoading, refetch } = trpc.websiteImages.getAll.useQuery();
  const updateImageMutation = trpc.websiteImages.updateImage.useMutation({
    onSuccess: () => {
      toast.success("Image updated successfully!");
      refetch();
      setUploadingId(null);
    },
    onError: (error) => {
      toast.error(`Failed to update image: ${error.message}`);
      setUploadingId(null);
    },
  });

  const handleFileUpload = async (imageId: number, file: File, isMobile: boolean = false) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setUploadingId(imageId);
    
    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64Data = (reader.result as string).split(',')[1]; // Remove data:image/...;base64, prefix
        
        await updateImageMutation.mutateAsync({
          imageId,
          fileData: base64Data,
          filename: file.name,
          mimeType: file.type,
          fileSize: file.size,
          isMobile,
        });
      };
      
      reader.onerror = () => {
        toast.error('Failed to read file');
        setUploadingId(null);
      };
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  // Group images by page
  type ImageType = NonNullable<typeof images>[number];
  const groupedImages = images?.reduce((acc, image) => {
    if (!acc[image.page]) {
      acc[image.page] = [];
    }
    acc[image.page].push(image);
    return acc;
  }, {} as Record<string, ImageType[]>);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container py-8">
          <h1 className="font-serif text-4xl text-foreground mb-2">Website Images</h1>
          <p className="text-muted-foreground">
            Manage all images across your website. Each image is identified by a colored numbered box.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="space-y-12">
          {groupedImages && (Object.entries(groupedImages) as [string, ImageType[]][]).map(([pageName, pageImages]) => (
            <div key={pageName}>
              <h2 className="font-serif text-2xl text-foreground mb-6">{pageName}</h2>
              
              <div className="grid gap-6">
                {pageImages
                  .sort((a: ImageType, b: ImageType) => a.displayNumber - b.displayNumber)
                  .map((image: ImageType) => (
                    <Card key={image.id} className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Numbered Color Box */}
                        <div className="flex-shrink-0">
                          <div
                            className="w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                            style={{ backgroundColor: image.boxColor }}
                          >
                            #{image.displayNumber}
                          </div>
                        </div>

                        {/* Image Info */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground mb-1">
                              {image.label}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {image.section}
                            </p>
                          </div>

                          {/* Desktop Image */}
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                              Desktop Image
                            </p>
                            <div className="relative w-full max-w-md h-48 bg-muted rounded-lg overflow-hidden">
                              <img
                                src={image.url}
                                alt={image.label}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {image.filename} • {(image.fileSize / 1024).toFixed(1)} KB
                            </p>
                            <div>
                              <input
                                type="file"
                                id={`upload-desktop-${image.id}`}
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleFileUpload(image.id, file, false);
                                  }
                                }}
                                disabled={uploadingId !== null}
                              />
                              <label htmlFor={`upload-desktop-${image.id}`}>
                                <Button
                                  variant="outline"
                                  className="cursor-pointer"
                                  disabled={uploadingId !== null}
                                  asChild
                                >
                                  <span>
                                    {uploadingId === image.id ? (
                                      <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Uploading...
                                      </>
                                    ) : (
                                      <>
                                        <Upload className="w-4 h-4 mr-2" />
                                        Replace Desktop
                                      </>
                                    )}
                                  </span>
                                </Button>
                              </label>
                            </div>
                          </div>

                          {/* Mobile Image */}
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                              Mobile Image (Optional)
                            </p>
                            <div className="relative w-full max-w-md h-48 bg-muted rounded-lg overflow-hidden">
                              {image.mobileUrl ? (
                                <img
                                  src={image.mobileUrl}
                                  alt={`${image.label} (Mobile)`}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                                  No mobile image - will use desktop
                                </div>
                              )}
                            </div>
                            {image.mobileFilename && (
                              <p className="text-xs text-muted-foreground">
                                {image.mobileFilename} • {((image.mobileFileSize || 0) / 1024).toFixed(1)} KB
                              </p>
                            )}
                            <div>
                              <input
                                type="file"
                                id={`upload-mobile-${image.id}`}
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleFileUpload(image.id, file, true);
                                  }
                                }}
                                disabled={uploadingId !== null}
                              />
                              <label htmlFor={`upload-mobile-${image.id}`}>
                                <Button
                                  variant="outline"
                                  className="cursor-pointer"
                                  disabled={uploadingId !== null}
                                  asChild
                                >
                                  <span>
                                    {uploadingId === image.id ? (
                                      <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Uploading...
                                      </>
                                    ) : (
                                      <>
                                        <Upload className="w-4 h-4 mr-2" />
                                        {image.mobileUrl ? 'Replace Mobile' : 'Upload Mobile'}
                                      </>
                                    )}
                                  </span>
                                </Button>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { trpc } from "@/lib/trpc";
import { useState, useEffect } from "react";

/**
 * Hook to fetch a website image by its key with responsive mobile/desktop support
 * Returns the appropriate image URL based on screen size
 * 
 * @param imageKey - The unique key for the image (e.g., "homepage_hero_bg")
 * @param fallbackUrl - Optional fallback URL if the image is not found in the database
 * @returns The image URL (mobile on small screens, desktop otherwise), fallback URL, or transparent placeholder while loading
 */
export function useWebsiteImage(imageKey: string, fallbackUrl?: string): string {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile size (< 768px, matching Tailwind's md breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { data: image, isLoading } = trpc.websiteImages.getByKey.useQuery(
    { imageKey },
    {
      // Don't refetch on window focus to avoid unnecessary requests
      refetchOnWindowFocus: false,
      // Cache for 5 minutes
      staleTime: 5 * 60 * 1000,
    }
  );

  // Return a 1x1 transparent pixel data URL while loading to prevent:
  // 1. Empty string src attribute warnings
  // 2. Showing fallback image flash
  const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  if (isLoading) {
    return transparentPixel;
  }

  // If mobile and mobile variant exists, use it; otherwise fall back to desktop
  if (isMobile && image?.mobileUrl) {
    return image.mobileUrl;
  }

  // Use desktop image or fallback
  return image?.url || fallbackUrl || transparentPixel;
}

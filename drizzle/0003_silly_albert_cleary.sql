ALTER TABLE `website_images` ADD `mobileFileKey` varchar(512);--> statement-breakpoint
ALTER TABLE `website_images` ADD `mobileUrl` text;--> statement-breakpoint
ALTER TABLE `website_images` ADD `mobileFilename` varchar(255);--> statement-breakpoint
ALTER TABLE `website_images` ADD `mobileMimeType` varchar(100);--> statement-breakpoint
ALTER TABLE `website_images` ADD `mobileFileSize` int;
CREATE TABLE `website_images` (
	`id` int AUTO_INCREMENT NOT NULL,
	`imageKey` varchar(100) NOT NULL,
	`label` varchar(255) NOT NULL,
	`page` varchar(100) NOT NULL,
	`section` varchar(255) NOT NULL,
	`boxColor` varchar(7) NOT NULL,
	`displayNumber` int NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`url` text NOT NULL,
	`filename` varchar(255) NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`fileSize` int NOT NULL,
	`updatedBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `website_images_id` PRIMARY KEY(`id`),
	CONSTRAINT `website_images_imageKey_unique` UNIQUE(`imageKey`)
);

/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProjectToTags` DROP FOREIGN KEY `_ProjectToTags_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProjectToTags` DROP FOREIGN KEY `_ProjectToTags_B_fkey`;

-- DropTable
DROP TABLE `Tags`;

-- DropTable
DROP TABLE `_ProjectToTags`;

-- CreateTable
CREATE TABLE `Tag` (
    `tag_name` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectToTag_AB_unique`(`A`, `B`),
    INDEX `_ProjectToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD CONSTRAINT `_ProjectToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Project`(`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD CONSTRAINT `_ProjectToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `_ProjectToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProjectToTag` DROP FOREIGN KEY `_ProjectToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProjectToTag` DROP FOREIGN KEY `_ProjectToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Tag` ADD COLUMN `projectProject_id` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_ProjectToTag`;

-- CreateTable
CREATE TABLE `TagOnProject` (
    `tag_id` INTEGER NOT NULL,
    `project_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tag_id`, `project_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_projectProject_id_fkey` FOREIGN KEY (`projectProject_id`) REFERENCES `Project`(`project_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagOnProject` ADD CONSTRAINT `TagOnProject_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`tag_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagOnProject` ADD CONSTRAINT `TagOnProject_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`project_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

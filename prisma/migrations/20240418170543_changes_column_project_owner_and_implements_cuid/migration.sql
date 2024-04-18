/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `project_owner` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_project_owner_fkey`;

-- DropForeignKey
ALTER TABLE `_ProjectToTag` DROP FOREIGN KEY `_ProjectToTag_A_fkey`;

-- AlterTable
ALTER TABLE `Project` DROP PRIMARY KEY,
    DROP COLUMN `project_owner`,
    ADD COLUMN `project_author` VARCHAR(191) NULL,
    MODIFY `project_id` VARCHAR(191) NOT NULL,
    MODIFY `project_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD PRIMARY KEY (`project_id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- AlterTable
ALTER TABLE `_ProjectToTag` MODIFY `A` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_project_author_fkey` FOREIGN KEY (`project_author`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD CONSTRAINT `_ProjectToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Project`(`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

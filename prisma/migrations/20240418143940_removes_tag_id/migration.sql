/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProjectToTag` DROP FOREIGN KEY `_ProjectToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Tag` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`tag_name`);

-- AlterTable
ALTER TABLE `_ProjectToTag` MODIFY `B` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD CONSTRAINT `_ProjectToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`tag_name`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `B` on the `_ProjectToTag` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `tag_id` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ProjectToTag` DROP FOREIGN KEY `_ProjectToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Tag` DROP PRIMARY KEY,
    ADD COLUMN `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`tag_id`);

-- AlterTable
ALTER TABLE `_ProjectToTag` MODIFY `B` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD CONSTRAINT `_ProjectToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE;

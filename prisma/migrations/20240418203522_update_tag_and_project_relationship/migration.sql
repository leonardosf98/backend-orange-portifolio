/*
  Warnings:

  - The primary key for the `TagOnProject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `TagOnProject` table. All the data in the column will be lost.
  - Added the required column `tag_name` to the `TagOnProject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `TagOnProject` DROP FOREIGN KEY `TagOnProject_tag_id_fkey`;

-- AlterTable
ALTER TABLE `TagOnProject` DROP PRIMARY KEY,
    DROP COLUMN `tag_id`,
    ADD COLUMN `tag_name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`tag_name`, `project_id`);

-- AddForeignKey
ALTER TABLE `TagOnProject` ADD CONSTRAINT `TagOnProject_tag_name_fkey` FOREIGN KEY (`tag_name`) REFERENCES `Tag`(`tag_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

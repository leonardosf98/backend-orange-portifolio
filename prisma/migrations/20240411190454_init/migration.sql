/*
  Warnings:

  - Added the required column `tag_name` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Tags` ADD COLUMN `tag_name` VARCHAR(191) NOT NULL;

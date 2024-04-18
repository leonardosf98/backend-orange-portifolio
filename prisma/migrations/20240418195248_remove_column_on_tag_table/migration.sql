/*
  Warnings:

  - You are about to drop the column `projectProject_id` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_projectProject_id_fkey`;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `projectProject_id`;

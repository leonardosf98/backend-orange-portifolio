/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `project_id` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Project` DROP PRIMARY KEY,
    MODIFY `project_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`project_id`);

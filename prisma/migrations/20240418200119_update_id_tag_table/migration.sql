/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[tag_id]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Tag` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`tag_id`, `tag_name`);

-- CreateIndex
CREATE UNIQUE INDEX `Tag_tag_id_key` ON `Tag`(`tag_id`);

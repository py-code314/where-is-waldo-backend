/*
  Warnings:

  - You are about to drop the column `altText` on the `scenes` table. All the data in the column will be lost.
  - Added the required column `imageAlt` to the `scenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewAlt` to the `scenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "scenes" DROP COLUMN "altText",
ADD COLUMN     "imageAlt" TEXT NOT NULL,
ADD COLUMN     "previewAlt" TEXT NOT NULL;

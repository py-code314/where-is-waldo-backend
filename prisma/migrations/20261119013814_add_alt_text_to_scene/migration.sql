/*
  Warnings:

  - Added the required column `altText` to the `scenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "scenes" ADD COLUMN     "altText" TEXT NOT NULL;

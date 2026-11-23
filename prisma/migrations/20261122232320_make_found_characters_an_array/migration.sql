/*
  Warnings:

  - The `foundCharacters` column on the `game_sessions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "game_sessions" DROP COLUMN "foundCharacters",
ADD COLUMN     "foundCharacters" INTEGER[];

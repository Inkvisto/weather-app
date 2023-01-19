/*
  Warnings:

  - You are about to drop the column `searchValue` on the `AddLocation` table. All the data in the column will be lost.
  - Added the required column `icon` to the `AddLocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `AddLocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `AddLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddLocation" DROP COLUMN "searchValue",
ADD COLUMN     "icon" TEXT NOT NULL,
ADD COLUMN     "place" TEXT NOT NULL,
ADD COLUMN     "temperature" TEXT NOT NULL;

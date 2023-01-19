/*
  Warnings:

  - A unique constraint covering the columns `[place]` on the table `AddLocation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AddLocation_place_key" ON "AddLocation"("place");

/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "AddLocation" (
    "id" SERIAL NOT NULL,
    "searchValue" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AddLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddLocation_userId_unique" ON "AddLocation"("userId");

-- AddForeignKey
ALTER TABLE "AddLocation" ADD CONSTRAINT "AddLocation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

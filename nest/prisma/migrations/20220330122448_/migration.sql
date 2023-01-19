-- DropForeignKey
ALTER TABLE "AddLocation" DROP CONSTRAINT "AddLocation_userId_fkey";

-- AddForeignKey
ALTER TABLE "AddLocation" ADD CONSTRAINT "AddLocation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

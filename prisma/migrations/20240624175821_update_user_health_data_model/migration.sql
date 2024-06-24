/*
  Warnings:

  - Added the required column `BMI` to the `UserHealthData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `UserHealthData` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `age` on the `UserHealthData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserHealthData" ADD COLUMN     "BMI" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;

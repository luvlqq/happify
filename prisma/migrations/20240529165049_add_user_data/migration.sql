/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `action` on the `Audit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserAimEnum" AS ENUM ('GAIN', 'LOSE', 'MAINTAIN', 'BALANCE');

-- CreateEnum
CREATE TYPE "UserTrainingLevelEnum" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'LIGHT_WEIGHT_BABY');

-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('WORKOUT', 'REST', 'CARDIO', 'HIIT', 'POWERLIFTING', 'BODYBUILDING', 'YOGA');

-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "ActionEnum" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'ERROR');

-- AlterTable
ALTER TABLE "Audit" DROP COLUMN "action",
ADD COLUMN     "action" "ActionEnum" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "RoleEnum" NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "Action";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "UserHealthData" (
    "id" SERIAL NOT NULL,
    "age" TIMESTAMP(3) NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UserAim" (
    "id" SERIAL NOT NULL,
    "aim" "UserAimEnum" NOT NULL,
    "level" "UserTrainingLevelEnum" NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserHealthData_id_key" ON "UserHealthData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserHealthData_userId_key" ON "UserHealthData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAim_id_key" ON "UserAim"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserAim_userId_key" ON "UserAim"("userId");

-- AddForeignKey
ALTER TABLE "UserHealthData" ADD CONSTRAINT "UserHealthData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAim" ADD CONSTRAINT "UserAim_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

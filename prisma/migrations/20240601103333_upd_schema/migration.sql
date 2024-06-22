/*
  Warnings:

  - Added the required column `gender` to the `UserHealthData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterEnum
ALTER TYPE "ActionEnum" ADD VALUE 'SUCCESS';

-- AlterTable
ALTER TABLE "UserHealthData" ADD COLUMN     "gender" "Gender" NOT NULL;

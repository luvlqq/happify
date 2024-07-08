-- CreateEnum
CREATE TYPE "MuscleGroup" AS ENUM ('CHEST', 'BACK', 'SHOULDERS', 'BICEPS', 'TRICEPS', 'LEGS', 'ABS');

-- CreateEnum
CREATE TYPE "Place" AS ENUM ('HOME', 'GYM', 'OUTDOOR');

-- CreateEnum
CREATE TYPE "DifficultyLevels" AS ENUM ('Easy', 'Medium', 'Hard', 'Light_Weitgh_Baby');

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "video" TEXT,
    "description" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "difficulty" "DifficultyLevels" NOT NULL,
    "groupOfMuscles" "MuscleGroup" NOT NULL,
    "repeats" INTEGER,
    "sets" INTEGER,
    "duration" INTEGER NOT NULL,
    "equipment" BOOLEAN NOT NULL,
    "place" "Place" NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_id_key" ON "Exercise"("id");

-- CreateIndex
CREATE INDEX "Exercise_name_id_idx" ON "Exercise"("name", "id");

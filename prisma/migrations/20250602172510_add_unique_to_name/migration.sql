/*
  Warnings:

  - The primary key for the `Habit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Mood` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `allDay` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_habitId_fkey";

-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_moodId_fkey";

-- AlterTable
ALTER TABLE "Entry" ADD COLUMN     "allDay" BOOLEAN NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ALTER COLUMN "habitId" SET DATA TYPE TEXT,
ALTER COLUMN "moodId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Habit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Habit_id_seq";

-- AlterTable
ALTER TABLE "Mood" DROP CONSTRAINT "Mood_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mood_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mood_id_seq";

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_moodId_fkey" FOREIGN KEY ("moodId") REFERENCES "Mood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

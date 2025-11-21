/*
  Warnings:

  - The primary key for the `professor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "professor" DROP CONSTRAINT "professor_pkey";

-- CreateEnum
CREATE TYPE "Task_Category" AS ENUM ('OCCUPATION', 'HOBBY', 'STUDY', 'HOMEWORK');

-- CreateEnum
CREATE TYPE "Task_Importance" AS ENUM ('IMPORTANT', 'NOMATTER');

-- CreateEnum
CREATE TYPE "Task_Urgency" AS ENUM ('URGENTLY', 'NOTURGENTLY');

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "registerAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Task" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "body" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "importance" "Task_Importance" NOT NULL,
    "urgency" "Task_Urgency" NOT NULL,
    "category" "Task_Category" NOT NULL,
    "userUid" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uid_key" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Task_uid_key" ON "Task"("uid");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

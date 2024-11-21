-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "registerAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uid_key" ON "User"("uid");

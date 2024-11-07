-- CreateTable
CREATE TABLE "RockBands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cityfundation" TEXT NOT NULL,
    "members" TEXT NOT NULL,
    "tour" TEXT,
    "bestsellingalbum" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RockBands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RockBands_name_key" ON "RockBands"("name");

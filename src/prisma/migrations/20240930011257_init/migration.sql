-- CreateTable
CREATE TABLE "Postfilme" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,

    CONSTRAINT "Postfilme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE `Pet` (
    `id_pet` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `especie` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NULL,
    `sexo` CHAR(1) NULL,
    `data_nascimento` DATETIME(3) NULL,
    `imagem_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id_pet`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

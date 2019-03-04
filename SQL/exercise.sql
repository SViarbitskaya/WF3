# Commentaire d'une ligne
/*Commentaire
sur
plisier
lignes
*/

# Créer une base de données
CREATE DATABASE `nomDeLaBase`;

# Supprimer une base de données
DROP DATABASE `nomDeLaBase`;

# Créer une table
CREATE TABLE `brouette`.`clients` (
 `id` INT NOT NULL AUTO_INCREMENT ,
  `nom` VARCHAR(50) NOT NULL ,
   `prenom` VARCHAR(50) NOT NULL ,
    `asresse` VARCHAR(255) NOT NULL ,
     `code_postal` VARCHAR(5) NOT NULL ,
      `ville` VARCHAR(100) NOT NULL ,
       `telephone` VARCHAR(12) NULL ,
        `date_inscription` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
         PRIMARY KEY (`id`)
         )
         ENGINE = InnoDB;

# Supprimer une table
DROP TABLE `clients`
# ou
DROP TABLE `brouette`.`client`
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dogdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dogdb` ;

-- -----------------------------------------------------
-- Schema dogdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dogdb` DEFAULT CHARACTER SET utf8 ;
USE `dogdb` ;

-- -----------------------------------------------------
-- Table `dog_profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dog_profile` ;

CREATE TABLE IF NOT EXISTS `dog_profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `birthday` VARCHAR(45) NULL,
  `age` INT NULL,
  `breed` VARCHAR(45) NULL,
  `weight` DOUBLE NULL,
  `chip_number` INT NULL,
  `registration_number` INT NULL,
  `food_brand` VARCHAR(45) NULL,
  `amount_food` VARCHAR(45) NULL,
  `vet_hospital_name` VARCHAR(45) NULL,
  `owner_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `name`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS admin@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'admin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `dog_profile`
-- -----------------------------------------------------
START TRANSACTION;
USE `dogdb`;
INSERT INTO `dog_profile` (`id`, `name`, `birthday`, `age`, `breed`, `weight`, `chip_number`, `registration_number`, `food_brand`, `amount_food`, `vet_hospital_name`, `owner_name`) VALUES (1, 'Kovu', 'June 13th 2021', 1, 'Pomeranian', 11.5, 23456, 2345678, 'Taste of The Wild', '1 cup', 'Vet CIty', 'Pamela');
INSERT INTO `dog_profile` (`id`, `name`, `birthday`, `age`, `breed`, `weight`, `chip_number`, `registration_number`, `food_brand`, `amount_food`, `vet_hospital_name`, `owner_name`) VALUES (2, 'Kiara', 'May 26th 2022', NULL, 'Pomeranian', 4, 45678, 2346345, 'Orijen', '1/2 cup', 'Vet City', 'Pamela');
INSERT INTO `dog_profile` (`id`, `name`, `birthday`, `age`, `breed`, `weight`, `chip_number`, `registration_number`, `food_brand`, `amount_food`, `vet_hospital_name`, `owner_name`) VALUES (3, 'Max', 'unknown', 5, 'Mix', 20, 34920, 3029984, 'Blue', '1 -1/2 cups', 'BandField', 'Yawar');
INSERT INTO `dog_profile` (`id`, `name`, `birthday`, `age`, `breed`, `weight`, `chip_number`, `registration_number`, `food_brand`, `amount_food`, `vet_hospital_name`, `owner_name`) VALUES (4, 'Maya', 'unknown', 2, 'Husky', 65, 98789, 8627832, 'Blue', '2-3 cups', 'BandField', 'Rodger');
INSERT INTO `dog_profile` (`id`, `name`, `birthday`, `age`, `breed`, `weight`, `chip_number`, `registration_number`, `food_brand`, `amount_food`, `vet_hospital_name`, `owner_name`) VALUES (5, 'Woody', 'July 2008', NULL, 'Schnauzer', 15, 34567, 3456432, 'Blue', '1-1/2cup', 'BandField', 'Sam');

COMMIT;


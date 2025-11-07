CREATE DATABASE solitaire_first_fse_tech_assignment;

USE solitaire_first_fse_tech_assignment;

CREATE TABLE `users`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_name` VARCHAR(255),
    'score' INT,
    'duration' INT,
);

INSERT INTO `users` (`user_name`, `score`, `duration`) 
VALUES 
('Alice Smith', FLOOR(RAND() * 1000), FLOOR(RAND() * 300)),








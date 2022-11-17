create schema if not exists project1;

use project1;

SET foreign_key_checks = 0;

drop table if exists reservations;
drop table if exists events;
drop table if exists workshops;

-- project1.events definition

CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

-- project1.workshops definition

CREATE TABLE `workshops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `workshops_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)
);

-- project1.reservations definition

CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `workshop_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reservations_un` (`email`),
  KEY `workshop_id` (`workshop_id`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`workshop_id`) REFERENCES `workshops` (`id`)
);

INSERT INTO project1.events (title,start_at,end_at) VALUES
	 ('Demo Event','2023-11-05','2023-11-10');

INSERT INTO project1.events (title,start_at,end_at) VALUES
	 ('Demo Event 2','2023-12-05','2023-12-10');

INSERT INTO project1.workshops (event_id,start_at,end_at,title,description) VALUES
	 (1,'2023-11-05','2023-11-05','Demo Workshop','Demo Workshop description');

INSERT INTO project1.reservations (name,email,workshop_id) VALUES
	 ('User Name','username@gmail.com',1),
	 ('User Name 2','username2@gmail.com',1),
	 ('User Name 3','username3@gmail.com',1),
	 ('User Name 4','username4@gmail.com',1),
	 ('User Name 5','username5@gmail.com',1),
	 ('User Name 6','username6@gmail.com',1),
	 ('User Name 7','username7@gmail.com',1),
	 ('User Name 8','username8@gmail.com',1),
	 ('User Name 9','username9@gmail.com',1),
	 ('User Name 10','username10@gmail.com',1);

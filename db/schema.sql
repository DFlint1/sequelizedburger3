CREATE DATABASE burgeryummy_db;
USE burgeryummy_db;
CREATE TABLE burgers
(
	id Int (11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT '0',
	date_id TIMESTAMP,
	-- date datetime NOT NULL DEFAULT NOW()
	PRIMARY KEY (id)
);
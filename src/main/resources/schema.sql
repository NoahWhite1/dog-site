CREATE TABLE breeder(
	b_id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	username varchar(200) NOT NULL UNIQUE,
	password varchar(200) NOT NULL,
	email varchar(200) NOT NULL UNIQUE,
	dog_url varchar(200)
	);

CREATE TABLE dog(
	d_id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	breed varchar(200) NOT NULL,
	age int NOT NULL,
	mother varchar(200) NOT NULL,
	father varchar(200) NOT NULL,
	b_id int,
	CONSTRAINT fk_breeder FOREIGN KEY (b_id) REFERENCES breeder(b_id)
);
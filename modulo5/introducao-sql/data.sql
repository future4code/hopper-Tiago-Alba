use `Hopper-4314219-tiago-moreno`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE usuarios(
id VARCHAR(50) NOT NULL PRIMARY KEY,
nome VARCHAR(50),
email VARCHAR(200) NOT NULL UNIQUE
);
INSERT INTO usuarios(id,nome,email)
VALUE("001","Luana","lua@lbn.com"),
("002","Vinicius","vini@lbn.com"),
("003","Laura","lau@lbn.com");

SELECT * FROM usuarios;

SELECT  id AS identifier, nome  FROM usuarios;

SELECT nome FROM usuarios
WHERE id = 001;

SELECT * FROM usuarios
WHERE nome LIKE "%a%";

SELECT * FROM usuarios
WHERE  NOT  nome LIKE  "%r%" AND email LIKE "%u%" ;

INSERT INTO usuarios(id,nome,email)
VALUE("004","Yuzo","yuzo@lbn.com");

SELECT * FROM usuarios;

DELETE FROM usuarios
WHERE id = 004;

SELECT * FROM usuarios;

USE `Hopper-4314219-tiago-moreno`;

CREATE TABLE projects(
id INT PRIMARY KEY,
name VARCHAR(250) UNIQUE NOT NULL,
title VARCHAR(250) NOT NULL,
date DATE NOT NULL
);

INSERT INTO projects(id,name,title,date)
VALUE("001","LabeSky","LSy","2023-10-05");
INSERT INTO projects (id,name,title,date)
VALUE("002","Labefy","LFy","2024-01-06"),
("003","AstroZoom","AZm","2022-12-20");

SELECT * FROM projects;

ALTER TABLE projects
DROP COLUMN title;
DESCRIBE  projects;

ALTER TABLE projects
CHANGE date duedDate DATE NOT NULL;

ALTER TABLE projects
CHANGE duedDate dueDate DATE NOT NULL ;

ALTER TABLE projects
ADD description VARCHAR(250) NOT NULL ;
UPDATE projects
SET description = "Projeto de sistema em nuvem da Labenu." 
WHERE id = 1;

UPDATE projects
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 2;

UPDATE projects
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 3;

SELECT * FROM projects
ORDER BY dueDate DESC;

SELECT * FROM projects
ORDER BY dueDate ASC LIMIT 2;
-- USE memes;

CREATE TABLE IF NOT EXISTS meme (
     id						INT				NOT NULL	AUTO_INCREMENT	PRIMARY KEY
    ,description			VARCHAR(255)	NOT NULL
    ,templateId				INT	            NOT NULL
);
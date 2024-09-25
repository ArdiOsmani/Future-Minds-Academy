CREATE DATABASE Library
USE LIBRARY

create table books(
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    genre VARCHAR(100),
    rating VARCHAR(10),
    year INT 
)
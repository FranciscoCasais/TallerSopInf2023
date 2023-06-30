create database formulario;
use formulario;
create table Usuario (
	ID int primary key not null auto_increment,
    Nombre varchar(45),
    Apellido varchar(45),
    Email varchar(45)
);
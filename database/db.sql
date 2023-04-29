CREATE DATABASE FILEDOWN;

CREATE TABLE ARCHIVOS_RAR(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

CREATE TABLE ARCHIVOS_EXE(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

CREATE TABLE ARCHIVOS_JPG(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

CREATE TABLE ARCHIVOS_PDF(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

CREATE TABLE CONTACTO(
    ID int(5) AUTO_INCREMENT,
    NOMBRE varchar(25) NOT NULL,
    CORREO varchar(50) NOT NULL,
    MENSAJE varchar(200) NOT NULL,
    PRIMARY KEY(ID)
);

CREATE TABLE ARCHIVOS_TABLE(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY (ID, FECHA)
);

-- TRIGGERS

CREATE TRIGGER `delete_archivo_rar` AFTER DELETE ON `archivos_rar`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_rar` AFTER INSERT ON `archivos_rar`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_rar` AFTER UPDATE ON `archivos_rar`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE = new.NOMBRE, 
    DESCRIPCION = new.DESCRIPCION, 
    FORMATO = new.FORMATO, 
    FECHA = new.FECHA, 
    RUTA_IMG = new.RUTA_IMG, 
    RUTA_URL = new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

CREATE TRIGGER `delete_archivo_exe` AFTER DELETE ON `archivos_exe`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_exe` AFTER INSERT ON `archivos_exe`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_exe` AFTER UPDATE ON `archivos_exe`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE = new.NOMBRE, 
    DESCRIPCION = new.DESCRIPCION, 
    FORMATO = new.FORMATO, 
    FECHA = new.FECHA, 
    RUTA_IMG = new.RUTA_IMG, 
    RUTA_URL = new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

CREATE TRIGGER `delete_archivo_jpg` AFTER DELETE ON `archivos_jpg`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_jpg` AFTER INSERT ON `archivos_jpg`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_jpg` AFTER UPDATE ON `archivos_jpg`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE = new.NOMBRE, 
    DESCRIPCION = new.DESCRIPCION, 
    FORMATO = new.FORMATO, 
    FECHA = new.FECHA, 
    RUTA_IMG = new.RUTA_IMG, 
    RUTA_URL = new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

CREATE TRIGGER `delete_archivo_pdf` AFTER DELETE ON `archivos_pdf`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_pdf` AFTER INSERT ON `archivos_pdf`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_pdf` AFTER UPDATE ON `archivos_pdf`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE = new.NOMBRE, 
    DESCRIPCION = new.DESCRIPCION, 
    FORMATO = new.FORMATO, 
    FECHA = new.FECHA, 
    RUTA_IMG = new.RUTA_IMG, 
    RUTA_URL = new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

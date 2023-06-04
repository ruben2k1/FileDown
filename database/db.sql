CREATE DATABASE FILEDOWN;

CREATE TABLE ARCHIVOS_RAR(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO_IMG varchar(50) NOT NULL,
    FORMATO_ARCHIVO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_1', 'RAR 1', 'ARCHIVO RAR 1', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/1');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_2', 'RAR 2', 'ARCHIVO RAR 2', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/2');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_3', 'RAR 3', 'ARCHIVO RAR 3', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/3');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_4', 'RAR 4', 'ARCHIVO RAR 4', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/4');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_5', 'RAR 5', 'ARCHIVO RAR 5', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/5');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_6', 'RAR 6', 'ARCHIVO RAR 6', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/6');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_7', 'RAR 7', 'ARCHIVO RAR 7', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/7');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_8', 'RAR 8', 'ARCHIVO RAR 8', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/8');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_9', 'RAR 9', 'ARCHIVO RAR 9', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/9');
INSERT INTO `archivos_rar` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('RAR_10', 'RAR 10', 'ARCHIVO RAR 10', '.jpg', '.rar', current_timestamp(), '/public/files/rar/1', '/archivo/rar/10');

CREATE TABLE ARCHIVOS_JPG(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO_IMG varchar(50) NOT NULL,
    FORMATO_ARCHIVO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_1', 'JPG 1', 'ARCHIVO JPG 1', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/1');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_2', 'JPG 2', 'ARCHIVO JPG 2', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/2');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_3', 'JPG 3', 'ARCHIVO JPG 3', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/3');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_4', 'JPG 4', 'ARCHIVO JPG 4', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/4');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_5', 'JPG 5', 'ARCHIVO JPG 5', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/5');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_6', 'JPG 6', 'ARCHIVO JPG 6', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/6');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_7', 'JPG 7', 'ARCHIVO JPG 7', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/7');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_8', 'JPG 8', 'ARCHIVO JPG 8', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/8');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_9', 'JPG 9', 'ARCHIVO JPG 9', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/9');
INSERT INTO `archivos_jpg` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('JPG_10', 'JPG 10', 'ARCHIVO JPG 10', '.jpg', '.jpg', current_timestamp(), '/public/files/jpg/1', '/archivo/jpg/10');

CREATE TABLE ARCHIVOS_PDF(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO_IMG varchar(50) NOT NULL,
    FORMATO_ARCHIVO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_1', 'PDF 1', 'ARCHIVO PDF 1', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/1');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_2', 'PDF 2', 'ARCHIVO PDF 2', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/2');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_3', 'PDF 3', 'ARCHIVO PDF 3', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/3');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_4', 'PDF 4', 'ARCHIVO PDF 4', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/4');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_5', 'PDF 5', 'ARCHIVO PDF 5', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/5');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_6', 'PDF 6', 'ARCHIVO PDF 6', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/6');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_7', 'PDF 7', 'ARCHIVO PDF 7', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/7');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_8', 'PDF 8', 'ARCHIVO PDF 8', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/8');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_9', 'PDF 9', 'ARCHIVO PDF 9', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/9');
INSERT INTO `archivos_pdf` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('PDF_10', 'PDF 10', 'ARCHIVO PDF 10', '.jpg', '.pdf', current_timestamp(), '/public/files/pdf/1', '/archivo/pdf/10');


CREATE TABLE ARCHIVOS_XLS(
    ID varchar(50),
    NOMBRE varchar(50) NOT NULL,
    DESCRIPCION varchar(500) NOT NULL,
    FORMATO_IMG varchar(50) NOT NULL,
    FORMATO_ARCHIVO varchar(50) NOT NULL,
    FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RUTA_IMG varchar(500) NOT NULL,
    RUTA_URL varchar(500) NOT NULL,
    PRIMARY KEY(ID, FECHA)
);

INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_1', 'XLS 1', 'ARCHIVO XLS 1', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/1');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_2', 'XLS 2', 'ARCHIVO XLS 2', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/2');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_3', 'XLS 3', 'ARCHIVO XLS 3', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/3');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_4', 'XLS 4', 'ARCHIVO XLS 4', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/4');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_5', 'XLS 5', 'ARCHIVO XLS 5', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/5');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_6', 'XLS 6', 'ARCHIVO XLS 6', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/6');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_7', 'XLS 7', 'ARCHIVO XLS 7', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/7');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_8', 'XLS 8', 'ARCHIVO XLS 8', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/8');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_9', 'XLS 9', 'ARCHIVO XLS 9', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/9');
INSERT INTO `archivos_xls` (`ID`, `NOMBRE`, `DESCRIPCION`, `FORMATO_IMG`, `FORMATO_ARCHIVO`, `FECHA`, `RUTA_IMG`, `RUTA_URL`) VALUES ('XLS_10', 'XLS 10', 'ARCHIVO XLS 10', '.jpg', '.xls', current_timestamp(), '/public/files/xls/1', '/archivo/xls/10');

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
    FORMATO_IMG varchar(50) NOT NULL,
    FORMATO_ARCHIVO varchar(50) NOT NULL,
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
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO_IMG, new.FORMATO_ARCHIVO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_rar` AFTER UPDATE ON `archivos_rar`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE=new.NOMBRE, 
    DESCRIPCION=new.DESCRIPCION, 
    FORMATO_IMG=new.FORMATO_IMG,
    FORMATO_ARCHIVO=new.FORMATO_ARCHIVO,
    FECHA=new.FECHA, 
    RUTA_IMG=new.RUTA_IMG, 
    RUTA_URL=new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

CREATE TRIGGER `delete_archivo_xls` AFTER DELETE ON `archivos_xls`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_xls` AFTER INSERT ON `archivos_xls`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO_IMG, new.FORMATO_ARCHIVO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_xls` AFTER UPDATE ON `archivos_xls`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE=new.NOMBRE, 
    DESCRIPCION=new.DESCRIPCION, 
    FORMATO_IMG=new.FORMATO_IMG,
    FORMATO_ARCHIVO=new.FORMATO_ARCHIVO,
    FECHA=new.FECHA, 
    RUTA_IMG=new.RUTA_IMG, 
    RUTA_URL=new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

CREATE TRIGGER `delete_archivo_jpg` AFTER DELETE ON `archivos_jpg`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_jpg` AFTER INSERT ON `archivos_jpg`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO_IMG, new.FORMATO_ARCHIVO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_jpg` AFTER UPDATE ON `archivos_jpg`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE=new.NOMBRE, 
    DESCRIPCION=new.DESCRIPCION, 
    FORMATO_IMG=new.FORMATO_IMG,
    FORMATO_ARCHIVO=new.FORMATO_ARCHIVO, 
    FECHA=new.FECHA, 
    RUTA_IMG=new.RUTA_IMG, 
    RUTA_URL=new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

CREATE TRIGGER `delete_archivo_pdf` AFTER DELETE ON `archivos_pdf`
 FOR EACH ROW DELETE FROM ARCHIVOS_TABLE 
WHERE ID=old.ID AND FECHA=old.FECHA;

CREATE TRIGGER `insert_archivo_pdf` AFTER INSERT ON `archivos_pdf`
 FOR EACH ROW INSERT INTO ARCHIVOS_TABLE VALUES (new.ID, new.NOMBRE, new.DESCRIPCION, new.FORMATO_IMG, new.FORMATO_ARCHIVO, new.FECHA, new.RUTA_IMG, new.RUTA_URL);

CREATE TRIGGER `update_archivo_pdf` AFTER UPDATE ON `archivos_pdf`
 FOR EACH ROW UPDATE ARCHIVOS_TABLE SET 
    NOMBRE=new.NOMBRE, 
    DESCRIPCION=new.DESCRIPCION, 
    FORMATO_IMG=new.FORMATO_IMG,
    FORMATO_ARCHIVO=new.FORMATO_ARCHIVO,
    FECHA=new.FECHA, 
    RUTA_IMG=new.RUTA_IMG, 
    RUTA_URL=new.RUTA_URL 
WHERE ID=new.ID AND FECHA=new.FECHA;

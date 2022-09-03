-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 02-09-2022 a las 20:22:42
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `“miprimernombre” + “yyyymmdd”`
--

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `consultas`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `consultas`;
CREATE TABLE IF NOT EXISTS `consultas` (
`idResource` int
,`COUNT(*)` bigint
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tresource`
--

DROP TABLE IF EXISTS `tresource`;
CREATE TABLE IF NOT EXISTS `tresource` (
  `idResource` int NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `descrip` varchar(200) NOT NULL,
  `idResourceType` int NOT NULL,
  PRIMARY KEY (`idResource`),
  KEY `idResourceType` (`idResourceType`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tresource`
--

INSERT INTO `tresource` (`idResource`, `created`, `descrip`, `idResourceType`) VALUES
(1, '2022-09-02 18:56:00', 'Primer Video', 1),
(2, '2022-09-02 18:58:00', 'Segundo Video', 1),
(3, '2022-09-02 19:02:00', 'Documentacion', 2),
(4, '2022-09-02 19:02:00', 'Enunciado', 3),
(5, '2022-09-02 19:02:00', 'Primera Solución', 4),
(6, '2022-09-02 19:02:00', 'Segunda Solución', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tresource_type`
--

DROP TABLE IF EXISTS `tresource_type`;
CREATE TABLE IF NOT EXISTS `tresource_type` (
  `idResourceType` int NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `descrip` varchar(200) NOT NULL,
  PRIMARY KEY (`idResourceType`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tresource_type`
--

INSERT INTO `tresource_type` (`idResourceType`, `created`, `descrip`) VALUES
(1, '2022-09-02 18:56:00', 'Video'),
(2, '2022-09-02 18:56:00', 'PDF Documentación'),
(3, '2022-09-02 18:56:00', 'PDF Enunciado'),
(4, '2022-09-02 18:56:00', 'PDF Solución');

-- --------------------------------------------------------

--
-- Estructura para la vista `consultas`
--
DROP TABLE IF EXISTS `consultas`;

DROP VIEW IF EXISTS `consultas`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `consultas`  AS SELECT `tresource`.`idResource` AS `idResource`, count(0) AS `COUNT(*)` FROM `tresource` GROUP BY `tresource`.`idResourceType` ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

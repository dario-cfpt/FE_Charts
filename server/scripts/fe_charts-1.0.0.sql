-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 09, 2020 at 09:37 PM
-- Server version: 10.4.12-MariaDB
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fe_charts`
--

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Catalogue`
--

CREATE TABLE `Tbl_Catalogue` (
  `Id_Catalogue` int(10) UNSIGNED NOT NULL,
  `No_Version` varchar(16) NOT NULL,
  `Dttm_Last_Update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Catalogue`
--

INSERT INTO `Tbl_Catalogue` (`Id_Catalogue`, `No_Version`, `Dttm_Last_Update`) VALUES
(1, '1.0.0', '2019-12-03 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Character`
--

CREATE TABLE `Tbl_Character` (
  `Id_Character` int(10) UNSIGNED NOT NULL,
  `Nm_First` varchar(32) DEFAULT NULL,
  `Nm_Last` varchar(32) DEFAULT NULL,
  `Nm_File_Img` varchar(64) DEFAULT NULL,
  `Id_House` int(10) UNSIGNED NOT NULL,
  `Id_Gender` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Character`
--

INSERT INTO `Tbl_Character` (`Id_Character`, `Nm_First`, `Nm_Last`, `Nm_File_Img`, `Id_House`, `Id_Gender`) VALUES
(1, 'Byleth (M)', 'Eisner', './img/characters/Byleth-M.png', 1, 3),
(2, 'Byleth (F)', 'Eisner', './img/characters/Byleth-F.png', 1, 2),
(3, 'Edelgard', 'von Hresvelg', './img/characters/Edelgard.png', 2, 2),
(4, 'Hubert', 'von Vestra', './img/characters/Hubert.png', 2, 3),
(5, 'Ferdinand', 'von Aegir', './img/characters/Ferdinand.png', 2, 3),
(6, 'Linhardt', 'von Hevring', './img/characters/Linhardt.png', 2, 3),
(7, 'Caspar', 'von Bergliez', './img/characters/Caspar.png', 2, 3),
(8, 'Bernadetta', 'von Varley', './img/characters/Bernadetta.png', 2, 2),
(9, 'Dorothea', 'Arnault', './img/characters/Dorothea.png', 2, 2),
(10, 'Petra', 'Macneary', './img/characters/Petra.png', 2, 2),
(11, 'Dimitri', 'Alexandre Blaiddyd', './img/characters/Dimitri.png', 3, 3),
(12, 'Dedue', 'Dedue Molinaro', './img/characters/Dedue.png', 3, 3),
(13, 'Felix', 'Hugo Fraldarius', './img/characters/Felix.png', 3, 3),
(14, 'Ashe', 'Ubert', './img/characters/Ashe.png', 3, 3),
(15, 'Sylvain', 'Jose Gautier', './img/characters/Sylvain.png', 3, 3),
(16, 'Mercedes', 'von Martritz', './img/characters/Mercedes.png', 3, 2),
(17, 'Annette', 'Fantine Dominic', './img/characters/Annette.png', 3, 2),
(18, 'Ingrid', 'Brandl Galatea', './img/characters/Ingrid.png', 3, 2),
(19, 'Claude', 'von Riegan', './img/characters/Claude.png', 4, 3),
(20, 'Lorenz', 'Hellman Gloucester', './img/characters/Lorenz.png', 4, 3),
(21, 'Raphael', 'Kirsten', './img/characters/Raphael.png', 4, 3),
(22, 'Ignatz', 'Victor', './img/characters/Ignatz.png', 4, 3),
(23, 'Lysithea', 'von Cordelia', './img/characters/Lysithea.png', 4, 2),
(24, 'Marianne', 'von Edmund', './img/characters/Marianne.png', 4, 2),
(25, 'Hilda', 'Valentine Goneril', './img/characters/Hilda.png', 4, 2),
(26, 'Leonie', 'Pinelli', './img/characters/Leonie.png', 4, 2),
(27, 'Seteth', NULL, './img/characters/Seteth.png', 5, 3),
(28, 'Flayn', NULL, './img/characters/Flayn.png', 5, 2),
(29, 'Hanneman', 'von Essar', './img/characters/Hanneman.png', 5, 3),
(30, 'Manuela', 'Casagranda', './img/characters/Manuela.png', 5, 2),
(31, 'Gilbert', 'Pronislav', './img/characters/Gilbert.png', 5, 3),
(32, 'Alois', 'Rangeld', './img/characters/Alois.png', 5, 3),
(33, 'Catherine', 'Rubens Charon', './img/characters/Catherine.png', 5, 2),
(34, 'Shamir', 'Nevrand', './img/characters/Shamir.png', 5, 2),
(35, 'Cyril', NULL, './img/characters/Cyril.png', 5, 3),
(36, 'Jeritza', 'von Hrym', './img/characters/Jeritza.png', 1, 3),
(37, 'Anna', NULL, './img/characters/Anna.png', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Character_Class`
--

CREATE TABLE `Tbl_Character_Class` (
  `Id_Class` int(10) UNSIGNED NOT NULL,
  `Id_Character` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Character_Class`
--

INSERT INTO `Tbl_Character_Class` (`Id_Class`, `Id_Character`) VALUES
(7, 3),
(7, 11),
(7, 19),
(32, 1),
(32, 2),
(33, 3),
(34, 11),
(35, 19),
(36, 3),
(37, 11),
(38, 19);

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Character_Growth_Rate`
--

CREATE TABLE `Tbl_Character_Growth_Rate` (
  `Nb_Value` int(11) NOT NULL DEFAULT 0,
  `Id_Character` int(10) UNSIGNED NOT NULL,
  `Id_Stat` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Character_Growth_Rate`
--

INSERT INTO `Tbl_Character_Growth_Rate` (`Nb_Value`, `Id_Character`, `Id_Stat`) VALUES
(45, 1, 1),
(45, 1, 2),
(35, 1, 3),
(45, 1, 4),
(45, 1, 5),
(45, 1, 6),
(35, 1, 7),
(30, 1, 8),
(45, 1, 9),
(45, 2, 1),
(45, 2, 2),
(35, 2, 3),
(45, 2, 4),
(45, 2, 5),
(45, 2, 6),
(35, 2, 7),
(30, 2, 8),
(45, 2, 9),
(40, 3, 1),
(55, 3, 2),
(45, 3, 3),
(45, 3, 4),
(40, 3, 5),
(30, 3, 6),
(35, 3, 7),
(35, 3, 8),
(60, 3, 9),
(35, 4, 1),
(30, 4, 2),
(55, 4, 3),
(45, 4, 4),
(45, 4, 5),
(35, 4, 6),
(25, 4, 7),
(40, 4, 8),
(35, 4, 9),
(50, 5, 1),
(45, 5, 2),
(20, 5, 3),
(40, 5, 4),
(50, 5, 5),
(40, 5, 6),
(35, 5, 7),
(20, 5, 8),
(40, 5, 9),
(30, 6, 1),
(30, 6, 2),
(45, 6, 3),
(40, 6, 4),
(40, 6, 5),
(45, 6, 6),
(30, 6, 7),
(45, 6, 8),
(20, 6, 9),
(55, 7, 1),
(45, 7, 2),
(25, 7, 3),
(45, 7, 4),
(45, 7, 5),
(40, 7, 6),
(30, 7, 7),
(20, 7, 8),
(25, 7, 9),
(35, 8, 1),
(35, 8, 2),
(20, 8, 3),
(55, 8, 4),
(50, 8, 5),
(25, 8, 6),
(20, 8, 7),
(30, 8, 8),
(35, 8, 9),
(40, 9, 1),
(20, 9, 2),
(40, 9, 3),
(45, 9, 4),
(40, 9, 5),
(35, 9, 6),
(15, 9, 7),
(35, 9, 8),
(40, 9, 9),
(45, 10, 1),
(40, 10, 2),
(25, 10, 3),
(50, 10, 4),
(60, 10, 5),
(45, 10, 6),
(30, 10, 7),
(15, 10, 8),
(35, 10, 9),
(55, 11, 1),
(60, 11, 2),
(20, 11, 3),
(50, 11, 4),
(50, 11, 5),
(25, 11, 6),
(40, 11, 7),
(20, 11, 8),
(55, 11, 9),
(60, 12, 1),
(50, 12, 2),
(15, 12, 3),
(30, 12, 4),
(20, 12, 5),
(25, 12, 6),
(50, 12, 7),
(10, 12, 8),
(30, 12, 9),
(45, 13, 1),
(55, 13, 2),
(30, 13, 3),
(45, 13, 4),
(55, 13, 5),
(40, 13, 6),
(30, 13, 7),
(20, 13, 8),
(30, 13, 9),
(35, 14, 1),
(35, 14, 2),
(25, 14, 3),
(55, 14, 4),
(50, 14, 5),
(40, 14, 6),
(20, 14, 7),
(35, 14, 8),
(25, 14, 9),
(55, 15, 1),
(45, 15, 2),
(30, 15, 3),
(35, 15, 4),
(50, 15, 5),
(35, 15, 6),
(40, 15, 7),
(25, 15, 8),
(40, 15, 9),
(30, 16, 1),
(25, 16, 2),
(50, 16, 3),
(45, 16, 4),
(40, 16, 5),
(30, 16, 6),
(25, 16, 7),
(45, 16, 8),
(40, 16, 9),
(25, 17, 1),
(30, 17, 2),
(50, 17, 3),
(50, 17, 4),
(35, 17, 5),
(35, 17, 6),
(20, 17, 7),
(30, 17, 8),
(35, 17, 9),
(40, 18, 1),
(35, 18, 2),
(35, 18, 3),
(40, 18, 4),
(60, 18, 5),
(45, 18, 6),
(30, 18, 7),
(40, 18, 8),
(45, 18, 9),
(35, 19, 1),
(40, 19, 2),
(25, 19, 3),
(60, 19, 4),
(55, 19, 5),
(45, 19, 6),
(30, 19, 7),
(25, 19, 8),
(55, 19, 9),
(55, 20, 1),
(40, 20, 2),
(40, 20, 3),
(45, 20, 4),
(40, 20, 5),
(25, 20, 6),
(30, 20, 7),
(40, 20, 8),
(35, 20, 9),
(65, 21, 1),
(50, 21, 2),
(15, 21, 3),
(35, 21, 4),
(15, 21, 5),
(35, 21, 6),
(45, 21, 7),
(10, 21, 8),
(25, 21, 9),
(35, 22, 1),
(35, 22, 2),
(30, 22, 3),
(50, 22, 4),
(50, 22, 5),
(55, 22, 6),
(25, 22, 7),
(35, 22, 8),
(25, 22, 9),
(20, 23, 1),
(15, 23, 2),
(60, 23, 3),
(60, 23, 4),
(50, 23, 5),
(15, 23, 6),
(10, 23, 7),
(25, 23, 8),
(25, 23, 9),
(35, 24, 1),
(20, 24, 2),
(50, 24, 3),
(40, 24, 4),
(40, 24, 5),
(35, 24, 6),
(15, 24, 7),
(45, 24, 8),
(40, 24, 9),
(50, 25, 1),
(45, 25, 2),
(25, 25, 3),
(30, 25, 4),
(50, 25, 5),
(35, 25, 6),
(35, 25, 7),
(20, 25, 8),
(50, 25, 9),
(40, 26, 1),
(40, 26, 2),
(20, 26, 3),
(55, 26, 4),
(60, 26, 5),
(40, 26, 6),
(40, 26, 7),
(15, 26, 8),
(40, 26, 9),
(50, 27, 1),
(45, 27, 2),
(35, 27, 3),
(50, 27, 4),
(50, 27, 5),
(25, 27, 6),
(30, 27, 7),
(25, 27, 8),
(45, 27, 9),
(25, 28, 1),
(25, 28, 2),
(55, 28, 3),
(45, 28, 4),
(35, 28, 5),
(15, 28, 6),
(25, 28, 7),
(50, 28, 8),
(45, 28, 9),
(40, 29, 1),
(30, 29, 2),
(55, 29, 3),
(45, 29, 4),
(20, 29, 5),
(35, 29, 6),
(25, 29, 7),
(40, 29, 8),
(35, 29, 9),
(50, 30, 1),
(35, 30, 2),
(35, 30, 3),
(40, 30, 4),
(60, 30, 5),
(35, 30, 6),
(30, 30, 7),
(25, 30, 8),
(50, 30, 9),
(55, 31, 1),
(45, 31, 2),
(20, 31, 3),
(45, 31, 4),
(30, 31, 5),
(15, 31, 6),
(45, 31, 7),
(10, 31, 8),
(35, 31, 9),
(45, 32, 1),
(45, 32, 2),
(20, 32, 3),
(35, 32, 4),
(40, 32, 5),
(30, 32, 6),
(40, 32, 7),
(20, 32, 8),
(40, 32, 9),
(50, 33, 1),
(50, 33, 2),
(25, 33, 3),
(40, 33, 4),
(55, 33, 5),
(30, 33, 6),
(30, 33, 7),
(20, 33, 8),
(25, 33, 9),
(35, 34, 1),
(40, 34, 2),
(20, 34, 3),
(55, 34, 4),
(40, 34, 5),
(55, 34, 6),
(20, 34, 7),
(15, 34, 8),
(30, 34, 9),
(35, 35, 1),
(20, 35, 2),
(15, 35, 3),
(40, 35, 4),
(40, 35, 5),
(30, 35, 6),
(10, 35, 7),
(10, 35, 8),
(15, 35, 9),
(50, 36, 1),
(50, 36, 2),
(35, 36, 3),
(35, 36, 4),
(60, 36, 5),
(30, 36, 6),
(40, 36, 7),
(25, 36, 8),
(25, 36, 9),
(35, 37, 1),
(35, 37, 2),
(35, 37, 3),
(45, 37, 4),
(55, 37, 5),
(45, 37, 6),
(30, 37, 7),
(40, 37, 8),
(50, 37, 9);

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Class`
--

CREATE TABLE `Tbl_Class` (
  `Id_Class` int(10) UNSIGNED NOT NULL,
  `Nm_Class` varchar(32) NOT NULL,
  `Is_Available_For_All` tinyint(1) NOT NULL,
  `Id_Gender` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Class`
--

INSERT INTO `Tbl_Class` (`Id_Class`, `Nm_Class`, `Is_Available_For_All`, `Id_Gender`) VALUES
(1, 'Noble', 0, 1),
(2, 'Commoner', 0, 1),
(3, 'Myrmidon', 1, 1),
(4, 'Soldier', 1, 1),
(5, 'Figther', 1, 1),
(6, 'Monk', 1, 1),
(7, 'Lord', 0, 1),
(8, 'Mercenary', 1, 1),
(9, 'Thief', 1, 1),
(10, 'Armored Knight', 1, 1),
(11, 'Cavalier', 1, 1),
(12, 'Brigand', 1, 1),
(13, 'Archer', 1, 1),
(14, 'Brawler', 1, 3),
(15, 'Mage', 1, 1),
(16, 'Dark Mage', 1, 3),
(17, 'Priest', 1, 1),
(18, 'Pegasus Knight', 1, 2),
(19, 'Hero', 1, 3),
(20, 'Swordmaster', 1, 1),
(21, 'Assassin', 1, 1),
(22, 'Fortress Knight', 1, 1),
(23, 'Paladin', 1, 1),
(24, 'Wyvern Rider', 1, 1),
(25, 'Warrior', 1, 1),
(26, 'Sniper', 1, 1),
(27, 'Grappler', 1, 3),
(28, 'Warlock', 1, 1),
(29, 'Dark Bishop', 1, 3),
(30, 'Bishop', 1, 2),
(31, 'Dancer', 0, 1),
(32, 'Enlightened One', 0, 1),
(33, 'Armored Lord', 0, 2),
(34, 'High Lord', 0, 3),
(35, 'Wyvern Master', 0, 3),
(36, 'Emperor', 0, 2),
(37, 'Great Lord', 0, 3),
(38, 'Barbarossa', 0, 3),
(39, 'Death Knight', 0, 3),
(40, 'Falcon Knight', 1, 2),
(41, 'Wyvern Lord', 1, 1),
(42, 'Mortal Savant', 1, 1),
(43, 'Great Knight', 1, 1),
(44, 'Bow Knight', 1, 1),
(45, 'Dark Knight', 1, 1),
(46, 'Holy Knight', 1, 1),
(47, 'War Master', 1, 3),
(48, 'Gremory', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Class_Growth_Rate`
--

CREATE TABLE `Tbl_Class_Growth_Rate` (
  `Nb_Value` int(11) NOT NULL DEFAULT 0,
  `Id_Class` int(10) UNSIGNED NOT NULL,
  `Id_Stat` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Class_Growth_Rate`
--

INSERT INTO `Tbl_Class_Growth_Rate` (`Nb_Value`, `Id_Class`, `Id_Stat`) VALUES
(5, 1, 9),
(10, 3, 1),
(5, 3, 5),
(-5, 3, 8),
(5, 3, 9),
(10, 4, 1),
(5, 4, 4),
(-5, 4, 8),
(5, 4, 9),
(10, 5, 1),
(5, 5, 2),
(-5, 5, 8),
(5, 5, 9),
(5, 6, 1),
(5, 6, 8),
(5, 6, 9),
(20, 7, 1),
(10, 7, 4),
(10, 7, 9),
(20, 8, 1),
(5, 8, 2),
(5, 8, 5),
(-5, 8, 8),
(5, 8, 9),
(20, 9, 1),
(10, 9, 4),
(10, 9, 5),
(5, 9, 9),
(20, 10, 1),
(-10, 10, 5),
(10, 10, 7),
(-5, 10, 8),
(5, 10, 9),
(20, 11, 1),
(5, 11, 2),
(5, 11, 4),
(-10, 11, 5),
(5, 11, 7),
(5, 11, 9),
(30, 12, 1),
(10, 12, 2),
(-5, 12, 8),
(5, 12, 9),
(5, 13, 1),
(10, 13, 4),
(5, 13, 6),
(5, 13, 9),
(30, 14, 1),
(-10, 14, 3),
(10, 14, 4),
(10, 14, 5),
(-10, 14, 8),
(5, 14, 9),
(5, 15, 1),
(-5, 15, 2),
(10, 15, 3),
(5, 15, 4),
(-5, 15, 7),
(5, 15, 8),
(5, 15, 9),
(5, 16, 1),
(-5, 16, 2),
(10, 16, 3),
(5, 16, 4),
(-5, 16, 7),
(5, 16, 8),
(5, 17, 1),
(-5, 17, 2),
(5, 17, 3),
(5, 17, 4),
(-5, 17, 7),
(10, 17, 8),
(10, 17, 9),
(15, 18, 1),
(10, 18, 5),
(5, 18, 8),
(10, 18, 9),
(30, 19, 1),
(10, 19, 2),
(10, 19, 5),
(-5, 19, 8),
(5, 19, 9),
(25, 20, 1),
(10, 20, 2),
(20, 20, 5),
(-5, 20, 8),
(5, 20, 9),
(20, 21, 1),
(20, 21, 4),
(20, 21, 5),
(30, 22, 1),
(10, 22, 2),
(-10, 22, 5),
(15, 22, 7),
(5, 22, 9),
(30, 23, 1),
(10, 23, 2),
(5, 23, 4),
(-10, 23, 5),
(5, 23, 6),
(5, 23, 7),
(5, 23, 8),
(5, 23, 9),
(30, 24, 1),
(10, 24, 2),
(-5, 24, 3),
(5, 24, 7),
(-5, 24, 8),
(5, 24, 9),
(40, 25, 1),
(15, 25, 2),
(-5, 25, 3),
(5, 25, 9),
(10, 26, 1),
(5, 26, 2),
(20, 26, 4),
(10, 26, 6),
(5, 26, 9),
(40, 27, 1),
(10, 27, 2),
(10, 27, 4),
(10, 27, 5),
(5, 27, 9),
(10, 28, 1),
(10, 28, 3), 
(-5, 28, 7), 
(5, 28, 8),
(5, 28, 9),
(10, 29, 1),
(10, 29, 3),
(-5, 29, 7),
(5, 29, 8),
(10, 30, 1),
(10, 30, 3),
(10, 30, 6),
(-5, 30, 7),
(5, 30, 8),
(10, 30, 9),
(20, 31, 1),
(-5, 31, 2),
(-5, 31, 7),
(-5, 31, 8),
(10, 31, 9),
(20, 32, 1),
(10, 32, 2),
(10, 32, 3),
(5, 32, 7),
(5, 32, 9),
(20, 33, 1),
(5, 33, 2),
(5, 33, 3),
(5, 33, 7),
(5, 33, 8),
(10, 33, 9),
(20, 34, 1),
(5, 34, 2),
(5, 34, 4),
(5, 34, 7),
(10, 34, 9),
(20, 35, 1),
(10, 35, 2),
(5, 35, 5),
(5, 35, 7),
(10, 35, 9),
(30, 36, 1),
(10, 36, 2),
(10, 36, 3),
(5, 36, 7),
(5, 36, 8),
(10, 36, 9),
(30, 37, 1),
(10, 37, 2),
(10, 37, 4),
(5, 37, 7),
(10, 37, 9),
(30, 38, 1),
(15, 38, 2),
(10, 38, 5),
(5, 38, 7),
(10, 38, 9),
(30, 39, 1),
(10, 39, 2),
(10, 39, 3),
(-5, 39, 5),
(5, 39, 7),
(5, 39, 8),
(30, 40, 1),
(10, 40, 2),
(20, 40, 5),
(5, 40, 8),
(10, 40, 9),
(30, 41, 1),
(15, 41, 2),
(-5, 41, 3),
(10, 41, 5),
(5, 41, 7),
(5, 41, 9),
(20, 42, 1),
(10, 42, 2),
(10, 42, 3),
(-10, 42, 5),
(10, 42, 6),
(5, 42, 9),
(30, 43, 1),
(10, 43, 2),
(-10, 43, 5),
(5, 43, 7),
(-5, 43, 8),
(5, 43, 9),
(10, 44, 1),
(-5, 44, 5),
(5, 44, 9),
(10, 45, 1),
(5, 45, 2),
(10, 45, 3),
(-5, 45, 5),
(5, 45, 7),
(10, 45, 8),
(5, 45, 9),
(10, 46, 1),
(10, 46, 3),
(-5, 46, 5),
(10, 46, 6),
(5, 46, 7),
(10, 46, 8),
(10, 46, 9),
(40, 47, 1),
(15, 47, 2),
(10, 47, 5),
(5, 47, 9),
(10, 48, 1),
(10, 48, 3),
(10, 48, 4),
(5, 48, 8),
(10, 48, 9);

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Gender`
--

CREATE TABLE `Tbl_Gender` (
  `Id_Gender` int(10) UNSIGNED NOT NULL,
  `Nm_Gender` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Gender`
--

INSERT INTO `Tbl_Gender` (`Id_Gender`, `Nm_Gender`) VALUES
(2, 'Female'),
(1, 'For all'),
(3, 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_House`
--

CREATE TABLE `Tbl_House` (
  `Id_House` int(10) UNSIGNED NOT NULL,
  `Nm_House` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_House`
--

INSERT INTO `Tbl_House` (`Id_House`, `Nm_House`) VALUES
(2, 'Black Eagles'),
(3, 'Blue Lions'),
(5, 'Church of Seiros'),
(4, 'Golden Deer'),
(1, 'Unaffiliated');

-- --------------------------------------------------------

--
-- Table structure for table `Tbl_Stat`
--

CREATE TABLE `Tbl_Stat` (
  `Id_Stat` int(10) UNSIGNED NOT NULL,
  `Nm_Stat` varchar(16) NOT NULL,
  `Nm_Short` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Tbl_Stat`
--

INSERT INTO `Tbl_Stat` (`Id_Stat`, `Nm_Stat`, `Nm_Short`) VALUES
(1, 'Health points', 'HP'),
(2, 'Strength', 'Str'),
(3, 'Magic', 'Mag'),
(4, 'Dexterity', 'Dex'),
(5, 'Speed', 'Spd'),
(6, 'Luck', 'Lck'),
(7, 'Defense', 'Def'),
(8, 'Resistance', 'Res'),
(9, 'Charm', 'Cha');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Tbl_Catalogue`
--
ALTER TABLE `Tbl_Catalogue`
  ADD PRIMARY KEY (`Id_Catalogue`),
  ADD UNIQUE KEY `tbl__catalogue__no__version` (`No_Version`);

--
-- Indexes for table `Tbl_Character`
--
ALTER TABLE `Tbl_Character`
  ADD PRIMARY KEY (`Id_Character`),
  ADD KEY `Id_House` (`Id_House`),
  ADD KEY `Id_Gender` (`Id_Gender`);

--
-- Indexes for table `Tbl_Character_Class`
--
ALTER TABLE `Tbl_Character_Class`
  ADD PRIMARY KEY (`Id_Class`,`Id_Character`),
  ADD KEY `Id_Character` (`Id_Character`);

--
-- Indexes for table `Tbl_Character_Growth_Rate`
--
ALTER TABLE `Tbl_Character_Growth_Rate`
  ADD PRIMARY KEY (`Id_Character`,`Id_Stat`),
  ADD KEY `Id_Stat` (`Id_Stat`);

--
-- Indexes for table `Tbl_Class`
--
ALTER TABLE `Tbl_Class`
  ADD PRIMARY KEY (`Id_Class`),
  ADD UNIQUE KEY `tbl__class__nm__class` (`Nm_Class`),
  ADD KEY `Id_Gender` (`Id_Gender`);

--
-- Indexes for table `Tbl_Class_Growth_Rate`
--
ALTER TABLE `Tbl_Class_Growth_Rate`
  ADD PRIMARY KEY (`Id_Class`,`Id_Stat`),
  ADD KEY `Id_Stat` (`Id_Stat`);

--
-- Indexes for table `Tbl_Gender`
--
ALTER TABLE `Tbl_Gender`
  ADD PRIMARY KEY (`Id_Gender`),
  ADD UNIQUE KEY `tbl__gender__nm__gender` (`Nm_Gender`);

--
-- Indexes for table `Tbl_House`
--
ALTER TABLE `Tbl_House`
  ADD PRIMARY KEY (`Id_House`),
  ADD UNIQUE KEY `tbl__house__nm__house` (`Nm_House`);

--
-- Indexes for table `Tbl_Stat`
--
ALTER TABLE `Tbl_Stat`
  ADD PRIMARY KEY (`Id_Stat`),
  ADD UNIQUE KEY `tbl__stat__nm__stat` (`Nm_Stat`),
  ADD UNIQUE KEY `tbl__stat__nm__short` (`Nm_Short`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Tbl_Catalogue`
--
ALTER TABLE `Tbl_Catalogue`
  MODIFY `Id_Catalogue` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Tbl_Character`
--
ALTER TABLE `Tbl_Character`
  MODIFY `Id_Character` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `Tbl_Class`
--
ALTER TABLE `Tbl_Class`
  MODIFY `Id_Class` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `Tbl_Gender`
--
ALTER TABLE `Tbl_Gender`
  MODIFY `Id_Gender` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Tbl_House`
--
ALTER TABLE `Tbl_House`
  MODIFY `Id_House` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Tbl_Stat`
--
ALTER TABLE `Tbl_Stat`
  MODIFY `Id_Stat` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Tbl_Character`
--
ALTER TABLE `Tbl_Character`
  ADD CONSTRAINT `Tbl_Character_ibfk_1` FOREIGN KEY (`Id_House`) REFERENCES `Tbl_House` (`Id_House`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Tbl_Character_ibfk_2` FOREIGN KEY (`Id_Gender`) REFERENCES `Tbl_Gender` (`Id_Gender`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Tbl_Character_Class`
--
ALTER TABLE `Tbl_Character_Class`
  ADD CONSTRAINT `Tbl_Character_Class_ibfk_1` FOREIGN KEY (`Id_Class`) REFERENCES `Tbl_Class` (`Id_Class`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Tbl_Character_Class_ibfk_2` FOREIGN KEY (`Id_Character`) REFERENCES `Tbl_Character` (`Id_Character`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Tbl_Character_Growth_Rate`
--
ALTER TABLE `Tbl_Character_Growth_Rate`
  ADD CONSTRAINT `Tbl_Character_Growth_Rate_ibfk_1` FOREIGN KEY (`Id_Character`) REFERENCES `Tbl_Character` (`Id_Character`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Tbl_Character_Growth_Rate_ibfk_2` FOREIGN KEY (`Id_Stat`) REFERENCES `Tbl_Stat` (`Id_Stat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Tbl_Class`
--
ALTER TABLE `Tbl_Class`
  ADD CONSTRAINT `Tbl_Class_ibfk_1` FOREIGN KEY (`Id_Gender`) REFERENCES `Tbl_Gender` (`Id_Gender`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Tbl_Class_Growth_Rate`
--
ALTER TABLE `Tbl_Class_Growth_Rate`
  ADD CONSTRAINT `Tbl_Class_Growth_Rate_ibfk_1` FOREIGN KEY (`Id_Class`) REFERENCES `Tbl_Class` (`Id_Class`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Tbl_Class_Growth_Rate_ibfk_2` FOREIGN KEY (`Id_Stat`) REFERENCES `Tbl_Stat` (`Id_Stat`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

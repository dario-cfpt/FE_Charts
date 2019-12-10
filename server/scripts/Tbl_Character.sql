SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `Tbl_Character` (`Id_Character`, `Nm_First`, `Nm_Last`, `Nm_File_Img`, `Id_House`, `Id_Gender`) VALUES
(1, 'Byleth', 'Eisner', NULL, 1, 3),
(2, 'Byleth', 'Eisner', NULL, 1, 2),
(3, 'Edelgard', 'von Hresvelg', NULL, 2, 2),
(4, 'Hubert', 'von Vestra', NULL, 2, 3),
(5, 'Ferdinand', 'von Aegir', NULL, 2, 3),
(6, 'Linhardt', 'von Hevring', NULL, 2, 3),
(7, 'Caspar', 'von Bergliez', NULL, 2, 3),
(8, 'Bernadetta', 'von Varley', NULL, 2, 2),
(9, 'Dorothea', 'Arnault', NULL, 2, 2),
(10, 'Petra', 'Macneary', NULL, 2, 2),
(11, 'Dimitri', 'Alexandre Blaiddyd', NULL, 3, 3),
(12, 'Dedue', 'Dedue Molinaro', NULL, 3, 3),
(13, 'Felix', 'Hugo Fraldarius', NULL, 3, 3),
(14, 'Ashe', 'Ubert', NULL, 3, 3),
(15, 'Sylvain', 'Jose Gautier', NULL, 3, 3),
(16, 'Mercedes', 'von Martritz', NULL, 3, 2),
(17, 'Annette', 'Fantine Dominic', NULL, 3, 2),
(18, 'Ingrid', 'Brandl Galatea', NULL, 3, 2),
(19, 'Claude', 'von Riegan', NULL, 4, 3),
(20, 'Lorenz', 'Hellman Gloucester', NULL, 4, 3),
(21, 'Raphael', 'Kirsten', NULL, 4, 3),
(22, 'Ignatz', 'Victor', NULL, 4, 3),
(23, 'Lysithea', 'von Cordelia', NULL, 4, 2),
(24, 'Marianne', 'von Edmund', NULL, 4, 2),
(25, 'Hilda', 'Valentine Goneril', NULL, 4, 2),
(26, 'Leonie', 'Pinelli', NULL, 4, 2),
(27, 'Seteth', NULL, NULL, 5, 3),
(28, 'Flayn', NULL, NULL, 5, 2),
(29, 'Hanneman', 'von Essar', NULL, 5, 3),
(30, 'Manuela', 'Casagranda', NULL, 5, 2),
(31, 'Gilbert', 'Pronislav', NULL, 5, 3),
(32, 'Alois', 'Rangeld', NULL, 5, 3),
(33, 'Catherine', 'Rubens Charon', NULL, 5, 2),
(34, 'Shamir', 'Nevrand', NULL, 5, 2),
(35, 'Cyril', NULL, NULL, 5, 3),
(36, 'Jeritza', 'von Hrym', NULL, 1, 3),
(37, 'Anna', NULL, NULL, 1, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

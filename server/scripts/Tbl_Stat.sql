SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

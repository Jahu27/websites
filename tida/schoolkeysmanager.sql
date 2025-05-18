-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 17, 2025 at 05:27 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolkeysmanager`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `keymanager`
--

CREATE TABLE `keymanager` (
  `school` int(11) NOT NULL,
  `class` varchar(20) NOT NULL,
  `givenTo` text DEFAULT NULL,
  `keyStatus` text DEFAULT NULL,
  `keyTime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `personel`
--

CREATE TABLE `personel` (
  `name` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `school` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personel`
--

INSERT INTO `personel` (`name`, `password`, `school`) VALUES
('Admin', '@dmin', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `schools`
--

CREATE TABLE `schools` (
  `school_id` int(11) NOT NULL,
  `school_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schools`
--

INSERT INTO `schools` (`school_id`, `school_name`) VALUES
(1, 'Technikum19');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `personel`
--
ALTER TABLE `personel`
  ADD KEY `school` (`school`);

--
-- Indeksy dla tabeli `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`school_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `school_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `personel`
--
ALTER TABLE `personel`
  ADD CONSTRAINT `personel_ibfk_1` FOREIGN KEY (`school`) REFERENCES `schools` (`school_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

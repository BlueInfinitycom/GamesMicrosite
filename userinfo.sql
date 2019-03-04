-- phpMyAdmin SQL Dump
-- version 3.5.FORPSI
-- http://www.phpmyadmin.net
--
-- Počítač: 81.2.194.199
-- Vygenerováno: Stř 01. úno 2017, 09:17
-- Verze MySQL: 5.6.34-79.1-log
-- Verze PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databáze: `f86389`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `jmeno` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `telefon` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `prodejna` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_3` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_4` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_5` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_6` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_7` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `odpoved_8` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `cas` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2025 at 03:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolibrary`
--

-- --------------------------------------------------------

--
-- Table structure for table `book_catalog`
--

CREATE TABLE `book_catalog` (
  `id` bigint(20) NOT NULL,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `creted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `image` varchar(20) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_catalog`
--

INSERT INTO `book_catalog` (`id`, `author`, `title`, `creted_at`, `updated_at`, `user_id`, `image`, `isbn`) VALUES
(1, 'Critique of Pure Reason', 'Critique of Pure Reason', NULL, NULL, NULL, '', ''),
(2, 'Beyond Good and Evil', ' Friedrich Nietzsche', NULL, NULL, NULL, '', ''),
(3, 'asda', 'TEST', NULL, NULL, NULL, 'banner_baru.jpg', 'adsadsa'),
(4, 'adsada', 'asdad', NULL, NULL, NULL, 'HEADER-INVGATH.png', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `book_rent`
--

CREATE TABLE `book_rent` (
  `id` bigint(20) NOT NULL,
  `rent_date` datetime DEFAULT NULL,
  `return_date` datetime DEFAULT NULL,
  `book_id` bigint(20) DEFAULT NULL,
  `member_id` bigint(20) DEFAULT NULL,
  `creted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_rent`
--

INSERT INTO `book_rent` (`id`, `rent_date`, `return_date`, `book_id`, `member_id`, `creted_at`, `updated_at`, `user_id`) VALUES
(3, '2025-03-20 00:00:00', NULL, 2, 1, NULL, NULL, NULL),
(4, '2025-02-27 00:00:00', NULL, 3, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `creted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `email`, `name`, `creted_at`, `updated_at`, `user_id`) VALUES
(1, 'kotokareh@gmail.com', 'RIAN', NULL, NULL, NULL),
(2, 'ads', 'asd', NULL, NULL, NULL),
(3, 'ads@asd.com', 'asd', NULL, NULL, NULL),
(7, 'asdad@asd.com', 'asd', NULL, NULL, NULL),
(8, 'adsas@adsa.com', 'adsadad', NULL, NULL, NULL),
(9, 'rahmed@gmail.com', 'RAHMED ABABIl', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book_catalog`
--
ALTER TABLE `book_catalog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_rent`
--
ALTER TABLE `book_rent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK98mc6dyonkusg26ft6yg2jr88` (`book_id`),
  ADD KEY `FK8fvcj5e59b0mog2drhwfvhw4r` (`member_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_9d30a9u1qpg8eou0otgkwrp5d` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book_catalog`
--
ALTER TABLE `book_catalog`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `book_rent`
--
ALTER TABLE `book_rent`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book_rent`
--
ALTER TABLE `book_rent`
  ADD CONSTRAINT `FK8fvcj5e59b0mog2drhwfvhw4r` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`),
  ADD CONSTRAINT `FK98mc6dyonkusg26ft6yg2jr88` FOREIGN KEY (`book_id`) REFERENCES `book_catalog` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

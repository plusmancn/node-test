/***============================== Person ==============================***/
CREATE TABLE IF NOT EXISTS `Person` (
  `PersonId` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  PRIMARY KEY (`PersonId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `Person` (PersonId,FirstName,LastName) values (0,'Bool','Zila');
INSERT INTO `Person` (PersonId,FirstName,LastName) values (1,'Julia','Tina');


/***============================== Address ==============================***/
CREATE TABLE IF NOT EXISTS Address (
  `AddressId` int(11) NOT NULL AUTO_INCREMENT,
  `PersonId` int(11) NOT NULL,
  `City` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  PRIMARY KEY (`AddressId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `Address` (PersonId,City,State) values(1,'New York','Missia');
INSERT INTO `Address` (PersonId,City,State) values(1,'Lasvgas','Deli');


SELECT 
    FirstName, LastName, City, State
FROM
    Person as P,Address as A
where p.PersonId=a.PersonId;
    LEFT  JOIN
Address using(PersonId);
    ON p.PersonId = a.PersonId;
    
    
/***============================== Employee ==============================***/
CREATE TABLE IF NOT EXISTS Employee (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Salary` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO `Employee` (`Salary`) values (100);
INSERT INTO `Employee` (`Salary`) values (200);
INSERT INTO `Employee` (`Salary`) values (300);

# Write your MySQL query statement below
select 
  ifnull(
(SELECT 
    Salary as SecondHighestSalary
FROM
    Employee
WHERE
    salary < (SELECT 
            MAX(salary)
        FROM
            Employee)
ORDER BY Salary DESC
LIMIT 0 , 1),null) as SecondHighestSalary;  
 
/***==============================customer==============================***/
CREATE TABLE IF NOT EXISTS `Customers` (
  `Id` INT NOT NULL COMMENT '',
  `Name` VARCHAR(255) NOT NULL COMMENT '',
  PRIMARY KEY (`Id`)  COMMENT 
'');

/***==============================Weather==============================***/
CREATE TABLE IF NOT EXISTS `Weather` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` Date NOT NULL,
  `Temperature` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
);

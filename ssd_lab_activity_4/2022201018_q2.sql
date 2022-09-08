DELIMITER $$
Create PROCEDURE FIND(IN city varchar(50))
BEGIN
Select CUST_NAME FROM customer where WORKING_AREA=city;
END; $$

DELIMITER ;

CALL FIND('Bangalore');

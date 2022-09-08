Create Table temp(pname varchar(100),pcity varchar(100),pcountry varchar(100), grade integer);

DELIMITER $$
CREATE PROCEDURE makeit()
BEGIN
DECLARE is_do INTEGER DEFAULT 0;
DECLARE pname VARCHAR(100) DEFAULT "";
DECLARE pcity VARCHAR(100) DEFAULT "";
DECLARE pcountry VARCHAR(100) DEFAULT "";
DECLARE grade INTEGER DEFAULT 0;
DECLARE curcus CURSOR For 
SELECT CUST_NAME,CUST_CITY,CUST_COUNTRY,GRADE from customer where AGENT_CODE like "A00%";
DECLARE CONTINUE HANDLER FOR NOT FOUND SET is_do = 1;
OPEN curcus;
get_list: LOOP
FETCH curcus INTO pname,pcity,pcountry,grade;
IF is_do = 1 THEN
LEAVE get_list;
END IF;
Insert into temp values(pname,pcity,pcountry,grade);
END LOOP get_list;
CLOSE cursur;
Select * from temp;
END;$$







DELIMITER $$
Create PROCEDURE sumit(IN num1 int, IN num2 int, OUT res int)
BEGIN
Set res = num1+num2;
END; $$

DELIMITER ;

set @res = 0;
call CUSTOMER_DB.sumit(15, 15, @res);
select @res;

Select concat(Fname,Lname) as FullName,Ssn,Dnumber,Dname from EMPLOYEE,DEPARTMENT,WORKS_ON where Mgr_ssn=Essn and Mgr_ssn=Ssn and WORKS_ON.Hours < 40;

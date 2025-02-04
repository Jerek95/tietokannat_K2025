CREATE PROCEDURE `LisaaSuoritus` (
IN En varchar(45),
IN Sn varchar(45),
IN KK varchar(45),
IN arvos int
)
Aliohjelma:BEGIN
declare OpiskID int default 0;
declare OpjaksoID int default 0;
SELECT idOpiskelija INTO OpiskID FROM opiskelija WHERE etunimi=En AND sukunimi=Sn;
IF OpiskID=0 then 
     SELECT 'Opiskelijaa ei ole';
     LEAVE Aliohjelma;
END IF;
SELECT idOpintojakso INTO OpjaksoID FROM opintojakso WHERE koodi=KK;
IF OpjaksoID=0 then
	SELECT 'Opintojaksoa ei ole';
    LEAVE Aliohjelma;
END IF;
IF arvos < 0 or arvos > 5 then 
	SELECT 'Ei sallittu arvosana';
    LEAVE Aliohjelma;
END IF;
INSERT INTO Arvionti VALUES(NULL,CURDATE(),Arvos,OpiskID,OpjaksoID);
END
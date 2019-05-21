    
UPDATE profile
SET profileImg1= $2,
    profileImg2= $3,
    firstName= $4,
    lastName= $5,
    age= $6,
    height= $7,
    weight= $8, 
    bmi= $9
WHERE id = $1
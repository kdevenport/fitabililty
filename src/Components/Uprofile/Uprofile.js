import React from 'react';
//When pulled back from the DB, firstName changes to firstname. lastName to lastname, etc.
function Uprofile(props){
    const { profile } = props;
    console.log(profile);
    return(
        <div>
            <img src={profile.profileimg1}></img>
            <img src={profile.profileimg2}></img>
            <h1>First Name: {profile.firstname}</h1>
            <h2>Last Name: {profile.lastname}</h2>
            <h1>Age: {profile.age}</h1>
            <h1>Height: {profile.height}</h1>
            <p>Weight: {profile.weight}</p>
            <p>BMI: {profile.bmi}</p>
            <p>ID: {profile.id}</p>
        </div>
    )
}
export default Uprofile;
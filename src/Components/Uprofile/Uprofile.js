import React from 'react';

import './Uprofile.css';
//When pulled back from the DB, firstName changes to firstname. lastName to lastname, etc.
function Uprofile(props){
    const { profile } = props;
    console.log(profile);
    return(
        <div className="profile_render">
            <img className="img1" src={profile.profileimg1}></img>
            <img className="img2" src={profile.profileimg2}></img>
            <div className="profile-details">
            <h1>{profile.firstname} {profile.lastname}</h1>
            <h1>Age: {profile.age}</h1>
            <h1>Height: {profile.height} inches</h1>
            <h1>Weight: {profile.weight} lbs</h1>
            <h1>BMI: {profile.bmi}%</h1>
            </div>
        </div>
    )
}
export default Uprofile;
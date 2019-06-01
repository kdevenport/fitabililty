import React from 'react';

import './Result.css';

function Result(props){
    const {deleteResult, result } = props;
    console.log(result);
    return(
        <div className="results-render">
            <img className="results-render-img" src={result.img1}/>
            <img className="results-render-img" src={result.img2}/>
            <div className="results-details">
            <p>Weight: {result.weight} lbs</p>
            <p>BMI: {result.bmi}%</p>
            <button id= "delete-button" className="btn" onClick={() =>deleteResult(result.id)}>Delete Result</button>
            </div>
        </div>
    )
}
export default Result;
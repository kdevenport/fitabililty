import React from 'react';

function Result(props){
    const {deleteResult, result } = props;
    console.log(result);
    return(
        <div>
            <img src={result.img1}></img>
            <img src={result.img2}></img>
            <p>Weight: {result.weight}</p>
            <p>BMI: {result.bmi}</p>
            <p>ID: {result.id}</p>
            <button onClick={() =>deleteResult(result.id)}>Delete Result</button>
        </div>
    )
}
export default Result;
import React from 'react';
import {Card} from 'react-bootstrap';

function Result(props){
    const {deleteResult, result } = props;
    console.log(result);
    return(
        <div className='card-deck'>
            <Card>
                <Card.Body>
            <Card.Img src={result.img1}/>
            <Card.Img src={result.img2}/>
            <Card.text>
            <p>Weight: {result.weight}</p>
            <p>BMI: {result.bmi}</p>
            <p>ID: {result.id}</p>
            </Card.text>
            <button onClick={() =>deleteResult(result.id)}>Delete Result</button>
            </Card.Body>
            </Card>
        </div>
    )
}
export default Result;
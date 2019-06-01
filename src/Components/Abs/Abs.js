import React, {Component}from 'react';
import { Card} from 'react-bootstrap';

import './Abs.css';

class Abs extends Component{
    render(){
        return(
            <div class='card-deck'>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/seated_abdominal_crunch.png" />
                    <Card.Title>
                        <h4 className="text-center">Seated (Resisted) Abdominal Crunch</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Rectus Abdominus, Obliques</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust the bench to a degree incline.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the resistance rods</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Do not lift your head or chin. Your head should follow the rib motion rather than lead it.</li>
                            <li>Maintain normal neck posture.</li>
                            <li>Tighten your abs throughout the entire exercise and relax only at the end of each set.</li>
                            <li>Move slowly to eliminate momentum.</li>
                            <li>Exhale during the upward movement and inhale during the downward movement.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/trunk_rotation.png" />
                    <Card.Title>
                        <h4 class="text-center">Trunk Rotation</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Rectus Abdominus, Obliques, Serratus Anterior</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your chest lifted, shoulders pinched, abs tight and a slight arch in your lower back.</li>
                            <li>Use only low weight rods.</li>
                            <li>Keep all motion in your torso.</li>
                            <li>Move only as far as your muscles let you. Do not use momentum to increase your range of motion.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
            </div>
        )
    }
}


export default Abs;
import React, {Component}from 'react';
import { CardColumns, Card} from 'react-bootstrap';

class Shoulders extends Component{
    render(){
        return(
            <div class='card-deck'>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/seated_shoulder_press.png" />
                    <Card.Title>
                        <h4 class="text-center"> Seated Shoulder Press</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Front Deltoids, Upper Trapezius, Triceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench Position</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the resistance rods</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your knees bent and your feet flat on the floor.</li>
                            <li>Do not increase the arch in your lower back as you raise your arms, but keep your spine steady and tight.</li>
                            <li>Keep your abdominals tight and maintain good spinal alignment.</li>
                            <li>Keep tension in your front shoulder muscles when you return to the starting position.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/front_shoulder_raise.png" />
                    <Card.Title>
                        <h4 class="text-center">Front Shoulder Raise</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Ront and Middle Deltoids</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your abdominals tight and maintain good spinal alignment with a slight arch in your lower back.</li>
                            <li>Keep your knees bent and your feet flat on the floor.</li>
                            <li>Do not increase the arch in your lower back as your raise your arms, but keep your spine stready and tight.</li>
                            <li>Your arms may be moved alternately or together.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/crossover_seated_rear_deltoid_rows.png" />
                    <Card.Title>
                        <h4 class="text-center">Crossover Seated Rear Deltoid Rows</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Rear and Middle Deltoids, Posterior, Rotator Cuff, Upper Latissimus, Teres Major, Trapezius, Rhomboids</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Maintain a 90 degree angle between your upper arms and torso throughout the motion.</li>
                            <li>Keep your knees bent, feet flat on the floor.</li>
                            <li>To work one arm at a time place the non-working hand on the bench to stabilize.</li>
                            <li>Keep your shoulder blades pinched together and maintain good spinal alignment.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/scapular_retraction.png" />
                    <Card.Title>
                        <h4 class="text-center">Scapular Retraction</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Middle Trapezius, Rhomboids</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Do not lose your spinal alignment.</li>
                            <li>Keep your chest lifted.</li>
                            <li>Keep your spine alighned and a slight arch in your lower back.</li>
                            <li>Do not use your arm muscles for this movement.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
            </div>
        )
    }
}


export default Shoulders;
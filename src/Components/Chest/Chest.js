import React, {Component}from 'react';
import { CardColumns, Card} from 'react-bootstrap';

class Chest extends Component{
    render(){
        return(
            <div class='card-deck'>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/aerobic_rowing.png" />
                    <Card.Title>
                        <h4 class="text-center">Aerobic Rowing</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Pectoralis Major; Anterior Deltoids</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Remove bench and set rail</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the resistance rods</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Maintain good spinal alignment. Keep chest lifted</li>
                            <li>Bend from the hip during movement, not from the waist.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/bench_press.png" />
                    <Card.Title>
                        <h4 class="text-center">Bench Press</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Pectoralis Major, Deltoids, Triceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust the bench to a 45 degree incline</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Maintain a 90 degree angle between your upper arms and your torso throughout the motion.</li>
                            <li>Keep your chest muscles tight.</li>
                            <li>Limit and control your range of motion.</li>
                            <li>Keep your knees bent, feet flat on the floor, head back against the bench.</li>
                            <li>Keep your shoulder blades pinched together and maintain good spinal alignment.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/decline_bench_press.png" />
                    <Card.Title>
                        <h4 class="text-center">Decline Bench Press</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Pectoralis Major, Deltoids, Triceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust the bench to a 45 degree incline</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Maintain a 90 degree angle between your upper arms and torso at the start of the motion, and slightly less than 90 degree at the finish.</li>
                            <li>Keep your knees bent, feet flat on the floor, head back against the bench.</li>
                            <li>Do not let your elbows travel behind your shoulders.</li>
                            <li>Keep your shoulder blades pinched together and maintain good spinal alignment.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/incline_bench_press.png" />
                    <Card.Title>
                        <h4 class="text-center">Incline Bench Press</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Pectoralis Major, Deltoids, Triceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust the bench to a 45 degree incline</li>
                            <li>Chest Bar pulleys</li>
                            <li>Hand Grips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Maintain a 90 degree angle between your upper arms and torso at the start of the motion, and slightly less than 90 degree at the finish.</li>
                            <li>Keep your knees bent, feet flat on the floor, head back against the bench.</li>
                            <li>Do not let your elbows travel behind your shoulders.</li>
                            <li>Keep your shoulder blades pinched together and maintain good spinal alignment.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
            </div>
        )
    }
}


export default Chest;
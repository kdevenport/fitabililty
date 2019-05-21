import React, {Component}from 'react';
import { CardColumns, Card} from 'react-bootstrap';

class Legs extends Component{
    render(){
        return(
            <div class='card-deck'>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/leg_extension.png" />
                    <Card.Title>
                        <h4 class="text-center">Leg Extension</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Quadriceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench position.</li>
                            <li>Use the Leg Extension</li>
                            <li>Leg Extension pulleys</li>
                            <li>Attach the clips to the resistance rods</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Use slow, controlled motion. Do not kick into the extension.</li>
                            <li>Do not let your knees rotate outward during the exercise. Keep your kneecaps pointing up and straightforward.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/calf_raise.png" />
                    <Card.Title>
                        <h4 class="text-center">Calf Raise</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Gastrocnemius, Soleus</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Remove bench and seat rail knob.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Leg Press Belt</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your chest lifted, spine aligned, abs tight and a very slight arch in your lower back.</li>
                            <li>Do not bend from hip or waist during movement.</li>
                            <li>Push with end of foot to fully extend leg.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/seated_hip_adduction.png" />
                    <Card.Title>
                        <h4 class="text-center">Seated Hip Adduction</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Adductor Longus, Gluteus Medius</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench Position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Do not cross the attached leg in front of the stabilized leg.</li>
                            <li>Keep your abs tight and do not lift your hips or excessively arch your back.</li>
                            <li>Keep your spine straight and your hips level. Do not raise your hips during the motion.</li>
                            <li>Use only a small range of motion.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/seated_hip_abduction.png" />
                    <Card.Title>
                        <h4 class="text-center">Seated Hip Abduction</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Piriformis, Gluteus Maximus</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench Position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your spine straight and your hips level. Do not raise your hips during the motion.</li>
                            <li>Use only a small range of motion.</li>
                            <li>Keep your hips motionless throughout this exercise.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/standing_leg_kickback.png" />
                    <Card.Title>
                        <h4 class="text-center">Standing Leg Kickback</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p> Gluteus Maximus</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench Position.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your chest lifted, spine aligned, abs tight and a very slight arch in your lower back.</li>
                            <li>Do not bend from your waist or lower back.</li>
                            <li>Keep stablizer foot on foot plate.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/leg_press.png" />
                    <Card.Title>
                        <h4 class="text-center">Leg Press</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Gluteus Maximus</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Remove the bench and seat rail knob.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Leg Press Belt</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your chest lifted, spine aligned, abs tight and a very slight arch in your lower back.</li>
                            <li>Bend from hip during movement, not from waist.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
            </div>
        )
    }
}


export default Legs;
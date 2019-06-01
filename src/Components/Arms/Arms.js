import React, {Component}from 'react';
import { Card } from 'react-bootstrap';

import './Arms.css';

class Arms extends Component{
    render(){
        return(
            <div class="card-deck">
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/triceps_pushdown.png" />
                    <Card.Title>
                        <h4 class="text-center">Triceps Pushdown</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Triceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Remove the bench.</li>
                            <li>Top Cross Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the resistance rods</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your upper arms motionless and your wrists straight.</li>
                            <li>Keep your chest lifted, abs tight and maintain a slight arch in your lower back.</li>
                            <li>Keep your knees slightly bent and your feet flat on the floor.</li>
                            <li>Use a controlled motion and tighten your triceps throughout the exercise.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/lying_triceps_extension.png" />
                    <Card.Title>
                        <h4 class="text-center">Lying Triceps Extension</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Triceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Adjust to Flat Bench position.</li>
                            <li>Top Cross Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your knees slightly bent and your feet flat on the floor.</li>
                            <li>Lay your head back against the bench.</li>
                            <li>Keep your chest lifted, shoulders pinched together and a very slight arch in your lower back.</li>
                            <li>Keep your upper arms and shoulders motionless and your wrists straight.</li>
                            <li>Use a controlled motion and tighten your triceps throughout the exercise.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/standing_biceps_curl.png" />
                    <Card.Title>
                        <h4 class="text-center">Standing Biceps Curl</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Biceps</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Remove the bench.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your chest lifted, abs tight and a very slight arch in your lower back.</li>
                            <li>Keep your knees slightly bent and your feet flat on the floor.</li>
                            <li>Keep your elbows at your sides and your wrists straight.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
                   <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="/images/standing_wrist_curl.png" />
                    <Card.Title>
                        <h4 class="text-center">Standing Wrist Curl</h4>
                    </Card.Title>
                    <Card.Text>
                        <h5>Muscles worked</h5>
                        <p>Biceps, Forearms</p>
                        <h5>Machine Set-Up</h5>
                        <ul>
                            <li>Remove the bench.</li>
                            <li>Chest Bar pulleys</li>
                            <li>Handgrips</li>
                            <li>Attach the clips to the Power Rod (resistance rods)</li>
                        </ul>
                        <h5>Success Tips</h5>
                        <ul>
                            <li>Keep your chest lifted, trunk muscles tight and a very slight arch in your lower back.</li>
                            <li>Move slowly, keeping tension in the front of your forearms at all times.</li>
                            <li>Keep your knees slightly bent and your feet flat on the floor.</li>
                            <li>Do not increase or decrease the bend in your elbow during this exercise. Keep all motion in the wrist.</li>
                            <li>Do not rock your body back and forth during the wrist motion.</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                   </Card>
            </div>
        )
    }
}


export default Arms;
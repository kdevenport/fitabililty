import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Login.css';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsernameUpdate = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordUpdate = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    render(){
        return(
            <div id="container">
                <Form>
                    <div class="form-group">
                    <label for="username">Username</label>
                        <input class="form-control" type="text"
                        onChange = {(event) => this.handleUsernameUpdate(event)}/>
                    <label for="password">Password</label>
                        <input class="form-control" type="text" 
                        onChange = {(event) => this.handlePasswordUpdate(event)}/>
                    <div>
                    <button className="btn  mr-2">Login</button>
                    <button className="btn" id="link"> 
                    <Link style={{ textDecoration: 'none', color: 'white' }} to= "/register">Register</Link>
                    </button> 
                    </div>
                </div>
                </Form>
            </div>
        )
    }
}

export default Login;
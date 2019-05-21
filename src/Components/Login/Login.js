import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
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
            <div class="container">
                <Form>
                    <div class="form-group">
                    <label for="username">Username</label>
                        <input class="form-control" type="text" id="username"
                        onChange = {(event) => this.handleUsernameUpdate(event)}/>
                    <label for="password">Password</label>
                        <input class="form-control" type="text" id="password"
                        onChange = {(event) => this.handlePasswordUpdate(event)}/>
                    </div>
                    <div>
                    <button class="btn btn-primary mr-2">Login</button>
                    <button class="btn btn-primary">Register</button>
                </div>
                </Form>
            </div>
        )
    }
}

export default Login;
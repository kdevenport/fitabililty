import React, { Component } from 'react';

class Register extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            emailAddress: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleEmailAddressChange = (event) => {
        this.setState({
            emailAddress: event.target.value
        })
    }
    render(){
        return(
            <div claas="container">
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                            <input class="form-control" type="text" id="username" placeholder="Enter username"
                            onChange={(event) => this.handleUsernameChange(event)}></input>
                        <label for="password">Password</label>
                            <input class="form-control" type="text" id="password" placeholder="Enter password"
                            onChange={(event) => this.handlePasswordChange(event)}></input>
                        <label for="emailAddress">Email Address</label>
                            <input class="form-control" type="text" id="emailAddress" placeholder="Enter email address"
                            onChange={(event) => this.handleEmailAddressChange(event)}></input>
                    </div>
                    <br></br>
                    <br></br>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
export default Register;
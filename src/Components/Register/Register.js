import React, { Component } from 'react';

class Register extends Component{
    constructor(){
        super();

        this.state = {
            name: '',
            username: '',
            password: '',
            emailAddress: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
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
            <div id="container">
                <form>
                    <div className="form-group">
                    <label for="username">Name</label>
                            <input className="form-control" type="text" id="name" 
                            onChange={(event) => this.handleNameChange(event)}></input>
                        <label for="username">Username</label>
                            <input className="form-control" type="text" id="username" 
                            onChange={(event) => this.handleUsernameChange(event)}></input>
                        <label for="password">Password</label>
                            <input className="form-control" type="text" id="password" 
                            onChange={(event) => this.handlePasswordChange(event)}></input>
                        <label for="emailAddress">Email Address</label>
                            <input className="form-control" type="text" id="emailAddress" 
                            onChange={(event) => this.handleEmailAddressChange(event)}></input>
                            <button className="btn" type="submit">Submit</button>
                        </div>
                </form>

            </div>
        )
    }
}
export default Register;
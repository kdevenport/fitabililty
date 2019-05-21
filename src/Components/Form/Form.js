import React, { Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            profileImg1: '',
            profileImg2: '',
            firstName: '',
            lastName: '',
            age: 0,
            height: 0,
            weight: 0,
            bmi: 0
        }
    }
    componentDidMount(){
        const{id} = this.props.match.params;
        this.getProfile(id);
    }
    handleImg1Change = (event) => {
        this.setState({
            profileImg1: event.target.value
        })
    }
    handleImg2Change = (event) => {
        this.setState({
            profileImg2: event.target.value
        })
    }
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleHeightChange = (event) => {
        this.setState({
            height: event.target.value
        })
    }
    handleWeightChange = (event) => {
        this.setState({
            weight: event.target.value
        })
    }
    handleBMIChange = (event) => {
        this.setState({
            bmi: event.target.value
        })
    }
    getProfile = () => {
        axios.get(`/api/profile/`).then(response => {
            const {profileImg1, profileImg2, firstName, lastName, age, height, weight, bmi} = response.data;
            this.setState({
                profileImg1: profileImg1,
                profileImg2: profileImg2,
                firstName: firstName,
                lastName: lastName,
                age: age,
                height: height,
                weight: weight,
                bmi: bmi
            })
        })
    }
    createProfile = (event) => {
        event.preventDefault();
        const { profileImg1, profileImg2, firstName, lastName, age, height, weight, bmi} = this.state;

        const profile = {
            profileImg1: profileImg1,
            profileImg2: profileImg2,
            firstName: firstName,
            lastName: lastName,
            age: age,
            height: height,
            weight: weight,
            bmi: bmi
        }
        axios.post('/api/profile', profile).then(response => {
            this.props.history.push('/');
        })
    }
    updateProfile = () => {
        const {id} = this.props.match.params;
        const {profileImg1, profileImg2, firstName, lastName,age, height, weight, bmi} = this.state;
        axios.put(`/api/profile/${id}`, this.state).then(response =>{
            this.props.history.push('/');
        })
    }
    //Height had handleAgeChange being used instead of handleHeightChange
    render(){
        return(
            <div class="container">
            <form>
                <div class="form-group">
                    <label for="first-name">First name</label>
                        <input class="form-control" type="text" id="first-name" placeholder="Enter first name"
                        onChange={(event) => this.handleFirstNameChange(event)}/>
                    <label for="last-name">Last name</label>
                        <input class="form-control" type="text" id="last-name" placeholder="Enter last name"
                        onChange={(event) => this.handleLastNameChange(event)}/>
                    <label for="age">Age</label>
                        <input class="form-control" type="text" id="age" placeholder="Enter age"
                        onChange={(event) => this.handleAgeChange(event)}/>
                    <label for="name">Height</label>
                        <input class="form-control" type="text" id="height" placeholder="Enter height"
                        onChange={(event) => this.handleHeightChange(event)}/>
                    <label for="name">Weight</label>
                        <input class="form-control" type="text" id="weight" placeholder="Enter weight"
                        onChange={(event) => this.handleWeightChange(event)}/>
                    <label for="name">BMI</label>
                        <input class="form-control mb-3" type="text" id="bmi" placeholder="Enter BMI"
                        onChange={(event) => this.handleBMIChange(event)}/>
                    <label for="profileImg1">Front Profile Image</label>
                        <input class="form-control" type="text" id="profileImg1" placeholder="Enter front profile image" onChange={(event) => this.handleImg1Change(event)}/>
                    <label for="profileImg2">Side Profile Image</label>
                        <input class="form-control" type="text" id="profileImg2" placeholder="Enter side profile image" onChange={(event) => this.handleImg2Change(event)}/>
                    <br></br>
                    <br></br>
                    <div>
                        <button class="btn btn-primary mr-2" type="submit" onClick = {(event) => this.createProfile(event)}>Submit</button>
                        <button class="btn btn-primary" type="button" onClick = {(event) => this.updateProfile(event)}>Edit</button>
                    </div>
                </div>
           </form>
           </div>
        )
    }
}
export default Form;
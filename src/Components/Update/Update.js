import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component{
    constructor(props){
        super(props);

        this.state = {
            img1: '',
            img2: '',
            weight: 0,
            bmi: 0,
            edit: false,
        }
    }
    componentDidMount(){
        const{id} = this.props.match.params;
        this.getResult(id);
    }
    updateImg1 = (event) => {
        this.setState({
            img1: event.target.value
        })
    }
    updateImg2 = (event) => {
        this.setState({
            img2: event.target.value
        })
    }
    updateWeight = (event) => {
        this.setState({
            weight: event.target.value
        })
    }
    updateBMI = (event) => {
        this.setState({
            bmi: event.target.value
        })
    }
    resetResult = () => {
        this.setState({
            img1: '',
            img2: '',
            weight: '',
            bmi: ''
        })
    }
    getResult = (id) => {
        axios.get(`/api/result/:${id}`).then(response => {
            const {img1, img2, weight, bmi} = response.data;
            this.setState({
                img1:img1,
                img2: img2,
                weight: weight,
                bmi:bmi
            })
        })
    }
    createResult = (event) => {
        event.preventDefault();
        const { img1, img2, weight, bmi} = this.state;

        const result = {
            img1: img1,
            img2: img2,
            weight: weight,
            bmi: bmi
        }
        axios.post('/api/results', result).then(response => {
            this.props.history.push('/');
        })
    }
    render(){
        return(
            <div class="container">
                <form>
                    <div className="form-group">
                        <label for="name">Weight</label>
                            <input className="form-control" type="text" id="weight" placeholder="Enter weight" onChange={(event) => this.updateWeight(event)}/>
                        <label for="name">BMI</label>
                            <input className="form-control mb-3" type="text" id="bmi" placeholder="Enter BMI" onChange={(event) => this.updateBMI(event)}/>
                        <label for="img1">Front profile image</label>
                            <input className="form-control" type="text" id="img1" placeholder="Enter profile image" onChange={(event) => this.updateImg1(event)}/>
                        <label for="img2">Side profile image</label>
                            <input className="form-control" type="text" id="img2" placeholder="Enter side profile imgae" onChange={(event) => this.updateImg2(event)}/>
                            <button className="btn btn-primary mr-2" type="submit" onClick = {(event) => this.createResult(event)}>Submit</button>
                            <button className="btn btn-primary" type="button" onClick={() => this.resetResult()}>Reset</button>
                    </div>
                </form>
           </div>
        )
    }
}
export default Update;
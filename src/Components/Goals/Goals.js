import React, { Component } from 'react';

class Goals extends Component{
    constructor(){
        super();

        this.state = {
            goal1: '',
            goal2: '',
            goal3: ''
        }
    }
    handleGoal1Change = (event) => {
        this.setState({
            goal1: event.target.value
        })
    }
    handleGoal2Change = (event) => {
        this.setState({
            goal2: event.target.value
        })
    }
    handleGoal3Change = (event) => {
        this.setState({
            goal3: event.target.value
        })
    }
    render(){
        return(
            <div class="container">
                <form>
                <div class="form-group">
                <label for="message">Goal 1</label>
                <textarea class="form-control" id="message" rows="2"></textarea>
                <label for="message">Goal 2</label>
                <textarea class="form-control" id="message" rows="2"></textarea>
                <label for="message">Goal 3</label>
                <textarea class="form-control" id="message" rows="2"></textarea>
                </div>
                <div>
                    <button class="btn btn-primary mr-2" type="submit">Submit</button>
                    <button class="btn btn-primary" type="reset">Edit</button>
                </div>  
                </form>
            </div>
        )
    }
}
export default Goals;
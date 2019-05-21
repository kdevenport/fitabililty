import React, { Component} from 'react';
import Result from '../Result/Result';
import axios from 'axios';

class Results extends Component{
    constructor(){
        super();

        this.state = {
            resultsList: []
        }
    }
    componentDidMount(){
        this.getResults();
    }
    getResults = () => {
        axios.get('/api/results').then((response) => {
            this.setState({
                resultsList: response.data
            })
        })
    }
    getSelectedResult = (selectedResult) =>{
        this.setState({
            selectedResult:selectedResult
        })
    }
    deleteResult = (id) => {
        //const{getResult} = this.props; -Not needed. Delete didn't work because it was getResult();
        axios.delete(`/api/results/${id}`).then( response => {
            this.getResults();
        })
    }
    
    render(){
        const list = this.state.resultsList.map((result, i) => {
            return <Result key={i} result={result} deleteResult={this.deleteResult}/>
            })
        return(
            <div>{list}</div>
        )
    }
}
export default Results;
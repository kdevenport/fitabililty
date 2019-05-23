import React, { Component } from 'react';
import axios from 'axios';
import Uprofile from '../Uprofile/Uprofile';

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            profiles: []
        }
    }
    componentDidMount(){
        this.getProfile();
    }
    getProfile = () => {
        axios.get('/api/profile' ).then((response) => {
            this.setState({
                profiles: response.data
            })
        })
    }
    
    render(){
        console.log(this.state.profiles)
        const mappedprofile = this.state.profiles.map((profile, i) => {
            return <Uprofile key={i} profile={profile}/>
        })
        return(
            <div>{mappedprofile}</div>
        )
    }
}
export default Profile;
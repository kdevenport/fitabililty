import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Profile from '../Profile/Profile';
import Workouts  from '../Workouts/Workouts';
import Abs from '../Abs/Abs';
import Arms from '../Arms/Arms';
import Back from '../Back/Back';
import Chest from '../Chest/Chest';
import Legs from '../Legs/Legs';
import Shoulders from '../Shoulders/Shoulders';
import Results from '../Results/Results';
import './Navbar.css';

class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <ul className="list-group">
                <li className="list-group-item"><Link to= "/profile" component = { Profile }>Profile</Link></li>
                <li className="list-group-item"><Link to= "/workouts" component = { Workouts } >Workouts</Link></li>
                <li className="list-group-item"><Link to= "/abs" component = { Abs }>Abs</Link></li>
                <li className="list-group-item"><Link to= "/arms" component = { Arms }>Arms</Link></li>
                <li className="list-group-item"><Link to= "/back" component = { Back}>Back</Link></li>
                <li className="list-group-item"><Link to= "/chest" component = { Chest }>Chest</Link></li>
                <li className="list-group-item"><Link to= "/legs" component = { Legs }>Legs</Link></li>
                <li className="list-group-item"><Link to= "/shoulders" component = { Shoulders }>Shoulders</Link></li>
                <li className="list-group-item"><Link to= "/results" component = { Results }>Results</Link></li>
            </ul>
            
        )
    }
}
export default Navbar;
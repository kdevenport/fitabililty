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
            <div className="nav">
            <ul className="list-group">
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }} className="text-link" to= "/profile" component = { Profile }>Profile</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }} className="text-link" to= "/workouts" component = { Workouts } >Workouts</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }} className="text-link" to= "/abs" component = { Abs }>Abs</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }}className="text-link" to= "/arms" component = { Arms }>Arms</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }}className="text-link" to= "/back" component = { Back}>Back</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }}className="text-link" to= "/chest" component = { Chest }>Chest</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }} className="text-link" to= "/legs" component = { Legs }>Legs</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }} className="text-link" to= "/shoulders" component = { Shoulders }>Shoulders</Link></li>
                <li className="list-group-item"><Link style={{ textDecoration: 'none', color: 'white' }} className="text-link" to= "/results" component = { Results }>Results</Link></li>
            </ul>
            </div>
            
        )
    }
}
export default Navbar;
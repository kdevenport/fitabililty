import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Update from '../Update/Update';


function Header(){
    return(
        <nav className= "navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container"> 
                <h3 className="navbar-brand">Fitability</h3>
                <button className="navbar-toggler" 
                data-toggle="collapse" 
                data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/updateprofile" component = { Form }>Update Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link" to="/updateresults" component = { Update }>Update Results</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                </ul>
            </div>
        </div>
        
    </nav>

    )
}
export default Header;
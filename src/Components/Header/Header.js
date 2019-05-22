import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Update from '../Update/Update';


function Header(){
    return(
        <nav class= "navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container"> 
                <h3 class="navbar-brand">Fitability</h3>
                <button class="navbar-toggler" 
                data-toggle="collapse" 
                data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/updateprofile" component = { Form }>Update Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link  class="nav-link" to="/updateresults" component = { Update }>Update Results</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/logout">Logout</Link>
                        </li>
                </ul>
            </div>
        </div>
        
    </nav>

    )
}
export default Header;
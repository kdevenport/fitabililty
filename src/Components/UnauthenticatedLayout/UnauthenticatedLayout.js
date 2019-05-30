import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';

function UnauthenticatedLayout(){
    return(<div className="unauthenticated-layout">
        <Header />
        <Switch>
            <Route component = { Login } exact path = '/login' />
            <Route component = { Register } path = '/register'/>
            <Redirect to= '/login' />
        </Switch>
    </div>)

}
export default UnauthenticatedLayout;
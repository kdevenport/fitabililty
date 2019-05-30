import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Abs from '../Abs/Abs';
import Arms from '../Arms/Arms';
import Back from '../Back/Back';
import Chest from '../Chest/Chest';
import Legs from '../Legs/Legs';
import Shoulders from '../Shoulders/Shoulders';
import Results from '../Results/Results';
import Workouts from '../Workouts/Workouts';
import Form from '../Form/Form';
import Update from '../Update/Update';
import Navbar from '../Navbar/Navbar';




function AuthenticatedLayout(){
    return(<div className="authenticated-layout">
        <Header />
        <Navbar />
        <Switch>
            <Route component = { Profile }  path = '/profile' />
            <Route component =  { Abs } path = '/abs' />
            <Route component =  { Arms } path = '/arms' />
            <Route component = { Back } path = '/back' />
            <Route component =  { Chest } path = '/chest' />
            <Route component =  { Legs } path = '/legs' />
            <Route component =  { Shoulders } path = '/shoulders'/>
            <Route component =  { Results } path = '/results' />
            <Route component =  { Workouts } path = '/workouts' />
            <Route component = { Form } path ='/updateprofile'/>
            <Route component = { Update } path ='/updateresults'/>
            <Redirect to= '/profile' />
        </Switch>
    </div>)

}
export default AuthenticatedLayout;
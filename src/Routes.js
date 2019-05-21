import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Profile from './Components/Profile/Profile';
import Abs from './Components/Abs/Abs';
import Arms from './Components/Arms/Arms';
import Back from './Components/Back/Back';
import Chest from './Components/Chest/Chest';
import Legs from './Components/Legs/Legs';
import Shoulders from './Components/Shoulders/Shoulders';
import Workouts from './Components/Workouts/Workouts';
import Results from './Components/Results/Results';
import Form from './Components/Form/Form';
import Update from './Components/Update/Update';
import Goals from './Components/Goals/Goals';

export default(
    <Switch>
        <Route component = { Profile } exact path = '/' />
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
        <Route component = { Goals } path ='/updategoals'/>
    </Switch>
)
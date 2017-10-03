import React from 'react';
import {Switch, Route} from 'react-router-dom'
import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Main = () => (

            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/grid' component={PhotoGrid} />
                <Route path='/single' component={Single} />
            </Switch>
    )

export default Main;
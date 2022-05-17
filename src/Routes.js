import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './core/Home.js';
import Bar from './core/Bar';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />         
                <Route path="/Bar" exact component={Bar} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
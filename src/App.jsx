import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import British from './British';
import Plane from './Plane';
import Freedom from './Freedom';
import After from './After';
import Unity from './Unity';
import India from './India';
import Culture from './Culture';
function App()
{
    return(
        <>
            <Nav/>
            <Switch>
            <Route exact path="/" component={Plane}/>
            <Route exact path="/British" component={British}/>
            <Route exact path="/Freedom" component={Freedom}/>
            <Route exact path="/After" component={After}/>
            <Route exact path="/Unity" component={Unity}/>
            <Route exact path="/Culture" component={Culture}/>
            <Route exact path="/India" component={India}/>
            </Switch>
        </>
    );
}
export default App; 
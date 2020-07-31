import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
// import { App } from './components/app';
import signup from './Components/Signup'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login'

const Routes = () => (

    <BrowserRouter basename={'/'}>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/Dashboard" component={Dashboard} />
            {/* <Route path="/app" component={App} /> */}
        </div>
    </BrowserRouter>
)

export default Routes


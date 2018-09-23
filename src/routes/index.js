import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Users from '../components/Users/Users';
import User from '../components/User/User';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/user/:id" component={User} />
        </Switch>
    </BrowserRouter>
);
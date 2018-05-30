import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Redirect, browserHistory, } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from 'pages/login/index';
import Init from './main';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Init} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);

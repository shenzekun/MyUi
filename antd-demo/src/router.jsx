import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Redirect, browserHistory, } from 'react-router';
import { Route, Switch, HashRouter} from 'react-router-dom';
import Login from 'pages/login/index';
import Init from './main';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/" component={Init} />
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);

import React from 'react';
import Sidebar from 'components/Sidebar';
import { Route } from 'react-router-dom';
import './main.scss';
import User from 'pages/user';
import Home from 'pages/home';
import Report from 'pages/report';
import List from 'pages/list';
import Setting from 'pages/Setting';
export default class Init extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="rightWrap">
                    <Route path="/" component={Home} exact />
                    <Route path="/user" component={User} />
                    <Route path="/report" component={Report} />
                    <Route path="/list" component={List} />
                    <Route path="/setting" component={Setting} />
                </div>
            </div>
        );
    }
}

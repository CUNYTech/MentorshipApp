import React             from "react";
import ReactDOM          from "react-dom";
import App               from './app';
import Home              from './components/home';
import About             from './components/about';
import Registration      from "./components/registration";
import LoginPage         from './components/login';
import Profile           from './components/profile';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={Home}></Route>
            <Route path="about" component={About}></Route>
            <Route path="registration" component={Registration}></Route>
            <Route path="login" component={LoginPage}></Route>
            <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>
);

Meteor.startup(()=>{
    ReactDOM.render(routes, document.querySelector('.container'));
});

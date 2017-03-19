import React             from "react";
import ReactDOM          from "react-dom";
import App               from './app';
import MenteeInformation from './components/mentee_info';
import LoginPage         from './components/login';
import Home              from './components/home';
import About             from './components/about';
import Welcome           from './components/welcome';
import Registration      from "./components/registration";
import WorkInformation   from "./components/work_information";
import OtherInformation  from "./components/other_information";
import Dashboard         from './components/dashboard';
import Profile           from './components/profile';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
Meteor.subscribe('users');
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="registration" component={Registration}></Route>
            <Route path="login" component={LoginPage}></Route>
            <Route path="mentee" component={MenteeInformation}></Route>
            <Route path="home" component={Home}></Route>
            <Route path="about" component={About}></Route>
            <Route path="welcome" component={Welcome}></Route>
            <Route path="dashboard" component={Dashboard}></Route>
            <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>
);

Meteor.startup(()=>{
    ReactDOM.render(routes, document.querySelector('.container'));
});

import React             from "react";
import ReactDOM          from "react-dom";
import App               from './app';
import Home              from './components/home';
import About             from './components/about';
import Registration      from "./components/registration";
import LoginPage         from './components/login';
import Profile           from './components/profile';
import Messaging         from './components/messages'
import SearchResults     from './components/search_results';
import MainSearch        from './components/main-search';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';



const NotFound =() => {

    return <div>
        <div> <b> 404-Link Not Found. </b> </div>
        <div> This link was not found. Please let us know at ObecInc@gmail.com! </div>
    </div>

}

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}></Route>
            <Route path="about" component={About}></Route>
            <Route path="registration" component={Registration}></Route>
            <Route path="login" component={LoginPage}></Route>
            <Route path="profile(/:username)" component={Profile}></Route>
            <Route path="messages" component={Messaging}></Route>
            <Route path="mainsearch" component={MainSearch}></Route>
            <Route path="*" component = {NotFound}> </Route>

        </Route>
    </Router>
);


Meteor.startup(()=>{
    ReactDOM.render(routes, document.querySelector('.container'));
});

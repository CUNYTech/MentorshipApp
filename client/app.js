import React            from 'react';
import Registration     from './components/registration';
import WorkInformation  from './components/work_information';
import OtherInfromation from './components/other_information';
import LoginInformation from './components/login';
import Home             from './components/home';
import Header           from './components/header';

export default (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};

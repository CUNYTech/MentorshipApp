import React from 'react';

import MentorList from './mentor_list';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-xs-6" id="addBorder">
          <div>
            <img id="avatar" src="default-user.png" />
          </div>

          <div className="action-field">
              <p>
              <a href="">
                Search
              </a>
              </p>

              <a href="">
                <p>Messages</p>
              </a>

              <a href="">
                <p>Request</p>
              </a>

              <a href="">
                <p>Notifications</p>
              </a>
          </div>
      </div>

      <div className="col-xs-6">
        <MentorList />
      </div>
    </div>
  ); //end return()
};

export default Dashboard;

import React from 'react';

import MentorList from './mentor_list';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="profile-photo">
        <img id="photo" src="default-user.png" />
      </div>

      <div className="action-field">
          <a href="">
            <p>Search</p>
          </a>

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

      <div className="mentor-list">
        <MentorList />
      </div>
    </div>
  ); //end return()
};

export default Dashboard;

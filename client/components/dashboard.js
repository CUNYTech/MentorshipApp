import React from 'react';

import MentorList from './mentor_list';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="profile-photo">
        <img id="photo" src="default-user.png" />
      </div>

      <div className="action-field">
        <div className="action-links">
          <div>Search</div>
          <div>Messages</div>
          <div>Request</div>
          <div>Notifications</div>
        </div>
      </div>

      <div className="mentor-list">
        <MentorList />
      </div>
    </div>
  ); //end return()
};

export default Dashboard;

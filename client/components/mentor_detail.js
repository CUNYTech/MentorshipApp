import React from 'react';

const MentorDetail = ({ user }) => {


    return (
        <div className="thumbnail">
            <img src={user.profile.avatar} />
            <div className="caption">
                <h3>Name: {user.profile.firstName}</h3>
            </div>
        </div>
    );
};

export default MentorDetail;

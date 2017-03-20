import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false };
    }

    getName() {
        return this.props.user.profile.firstName + ' ' + this.props.user.profile.lastName;
    }

    getAvatar() {
        if(this.props.user.profile.avatar != '')
            return this.props.user.profile.avatar;
        else
            return  "default-user.png";
    }

    getProfile() {
        return (
            <div>
                <p>Title: {this.props.user.profile.title}</p>
                <p>Company: {this.props.user.profile.company}</p>
                <p>Blurb: {this.props.user.profile.blurb}</p>
            </div>
        );
    }

    editProfile() {
        this.setState({isEdit: true});
    }

    cancel() {
        this.setState({isEdit: false});
    }

    save() {
        const title = this.refs.title.value;
        const company = this.refs.company.value;
        const blurb = this.refs.blurb.value;
        Meteor.users.update(Meteor.userId(), {$set: {
            "profile.title": title,
            "profile.company": company,
            "profile.blurb": blurb,
        }});
        this.setState({isEdit: false});
    }

    render() {
        if(!this.props.user) {
            return <div>Loading...</div>;
        }
        else if(this.state.isEdit) {
            return (
                <div className="edit-profile">
                    <form className="form-horizontal">
                        <p>
                            <label>Title</label>
                            <input ref="title" className="form-control" type="text"
                                   defaultValue={this.props.user.profile.title} />
                        </p>
                        <p>
                            <label>Company</label>
                            <input ref="company" className="form-control" type="text"
                                   defaultValue={this.props.user.profile.company} />
                        </p>
                        <p>
                            <label>Blurb</label>
                            <input ref="blurb" className="form-control" type="text"
                                   defaultValue={this.props.user.profile.blurb} />
                        </p>
                    </form>
                    <div className="buttons">
                        <button className="btn btn-danger" onClick={() => this.cancel()}>
                            Cancel
                        </button>
                        <button className="btn btn-success" onClick={() => this.save()}>
                            Save
                        </button>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-md-4 col-md-offset-4" id="profile">
                    <button className="btn btn-primary" onClick={() => this.editProfile()}>
                        Edit Profile
                    </button>
                    <div>
                        <img id="profile-pic" className="col-md-4 col-md-offset-4" src={this.getAvatar()}/>
                    </div>
                    <div id="action-field2" className="col-md-4 col-md-offset-4" >
                        <p>{this.getName()}</p>
                        {this.getProfile()}
                    </div>
                </div>
            ); // end return()
        } //end else
    } //end render()
}; // end class Profile

export default createContainer(() => {
    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user()};
}, Profile);

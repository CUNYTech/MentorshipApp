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
                <p>{this.props.user.profile.firstName}</p>
                <p>{this.props.user.profile.blurb}</p>
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
        const name = this.refs.firstName.value;
        const blurb = this.refs.blurb.value;
        Meteor.users.update(Meteor.userId(), {$set: {
            "profile.firstName": name,
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
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form className="form-horizontal">
                            <p>
                                <label>Name</label>
                                <input ref="firstName" className="form-control" type="text"
                                       defaultValue={this.props.user.profile.firstName} />
                            </p>
                            <p>
                                <label>Blurb</label>
                                <textarea  placeholder="Describe yourself here... " id="profile_blurb" rows="4" cols="50" maxLength="500">

                            </textarea>

                            </p>
                        </form>

                        <div className="buttons">
                            <button className="btn btn-danger" onClick={() => this.cancel()}>
                                Cancel
                            </button>
                            <div className="floatRight">
                                <button className="btn btn-success" onClick={() => this.save()}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <div className="col-md-4 col-md-offset-4" id="profile">
                        <button className="btn btn-primary" onClick={() => this.editProfile()}>
                            Edit Profile
                        </button>
                        <div>
                            <img id="profile-pic" className="col-md-4 col-md-offset-4" src={this.getAvatar()}/>
                        </div>
                        <div id="action-field2" className="col-md-4 col-md-offset-4" >
                            {this.getProfile()}
                        </div>
                    </div>
                </div>
            ); // end return()
        } //end else
    } //end render()
}; // end class Profile


//<input ref="blurb" className="form-control" type="text"
  //     defaultValue={this.props.user.profile.blurb} />


export default createContainer(() => {
    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user()};
}, Profile);

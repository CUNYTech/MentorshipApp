import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';
import { Link }             from 'react-router';
import { createContainer }  from 'meteor/react-meteor-data';
import { Mentors }          from '../../imports/collections/mentors';
import { Mentees }          from '../../imports/collections/mentees';
import { Accounts }         from 'meteor/accounts-base';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  isEditProfile: false, isEditAccount: false };

    }

    validProfile() {
        if (user && user != 'undefined' && user != 'null') return true;
        return false;
    }

    ownProfile() {
        return this.props.user.username == this.props.paramUser.username;
    }

    getAvatar() {
      if (this.props.paramUser.profile.avatar != '' && this.props.userExist) {
        return this.props.paramUser.profile.avatar;
      }
      else {
        return "/default-user.png";
      }
    }

    getProfile() {
      return (
        <div className="col-md-2">
          <h2>{this.props.paramUser.profile.firstName}</h2>
          <p>{this.props.paramUser.profile.blurb}</p>
        </div>
      );
    }

    renderButtons() {
        if (this.props.user && this.ownProfile()) {
            return <p className="buttons" id="editProfile">
                <a onClick={() => this.editProfile()}>
                    Edit Profile
                </a>
                <br/>
                <a onClick={() => this.editAccount()}>
                    Account Setting
                </a>
            </p>;
        }
        else if (Meteor.userId() == null) {
            return <div> </div>;
        }
        else {
            return <p className="buttons" id="editProfile">
                <button className="btn-secondary">
                    Add Mentor
                </button>
            </p>;
        }
    }

    editProfile() {
        this.setState({isEditProfile: true});
    }

    cancelProfile() {
        this.setState({isEditProfile: false});
    }

    saveProfile() {
        const name = this.refs.firstName.value;
        const blurb = this.refs.blurb.value;
        Meteor.users.update(Meteor.userId(), {$set: {
            "profile.firstName": name,
            "profile.blurb": blurb,
        }});
        this.setState({isEditProfile: false});
    }

    editAccount() {
        this.setState({isEditAccount: true});
    }

    cancelAccount() {
        this.setState({isEditAccount: false});
    }

    saveAccount() {
        const email = this.refs.email.value;
        const newPassword = this.refs.newPassword.value;
        const conPassword = this.refs.conPassword.value;
        if(newPassword != conPassword) {
            console.log("passwords don't match");
        }
        else if(newPassword == '') {
            Meteor.call('users.updateEmail', email);
            this.setState({isEditAccount: false});
        }
        else {
            Meteor.call('users.updateEmail', email);
            Meteor.call('users.changePassword', newPassword);
            this.setState({isEditAccount: false});
        }
    } //end saveAccount()

    addMentorTags(event) {
        event.preventDefault();
        tags = this.refs.mentortags.value;
        if (tags != "") {
            Meteor.call('users.addMentorTags', tags);
            this.refs.mentortags.value = "";
        }
    }

    addMenteeTags(event) {
        event.preventDefault();
        tags = this.refs.menteetags.value;
        if (tags != "") {
            Meteor.call('users.addMenteeTags', tags);
            this.refs.menteetags.value = "";
        }
    }

    removeMentorTags(event) {
      event.preventDefault();
      const tags = this.refs.mentortags.value;
      if (tags != "") {
          Meteor.call('users.removeMentorTags', tags);
          this.refs.mentortags.value = "";
      }
    }

    removeMenteeTags(event) {
      event.preventDefault();
      const tags = this.refs.menteetags.value;
      if (tags != "") {
          Meteor.call('users.removeMenteeTags', tags);
          this.refs.menteetags.value = "";
      }
    }

    render() {
        if(!this.props.userExist &&!this.props.loading) return <div> <b> 404 Page Not Found</b> <div> </div> Sorry, we could not find the account that you were looking for.  </div> ;

        if(!this.props.userExist ) {
            return <div>Loading...</div>;
        }
        else if(this.state.isEditProfile) {

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
                                <textarea ref="blurb" className="form-control" type="text"
                                          defaultValue={this.props.user.profile.blurb} placeholder="Describe yourself here... "
                                          id="profile_blurb" rows="4" cols="50" maxLength="500">
                                </textarea>
                            </p>
                            <p>
                                <label>Twitter</label>
                                <input ref="myTwitter" className="form-control" type="url"/>
                            </p>
                            <p>
                                <label>LinkedIn</label>
                                <input ref="myLinkedIn" className="form-control" type="url"/>
                            </p>
                            <p>
                                <label>Mentor Tags</label>
                                <input ref="mentortags" className="form-control" type="text"
                                       placeholder="Add or remove tags"
                                       id="mentor_tags">
                                </input>
                                <a onClick={this.addMentorTags.bind(this)}>
                                    <img className="tagIcons" id="plusIcon" src="/plus-icon.png"/>
                                </a>
                                <a onClick={this.removeMentorTags.bind(this)}>
                                    <img className="tagIcons" id="minusIcon" src="/minus-icon.png"/>
                                </a>
                            </p>
                            <div>
                              {this.props.user.profile.mentorTags.map(tag => {
                                return <span className="label label-info">{tag}</span>
                              })}
                            </div>
                            <p>
                                <label>Mentee Tags</label>
                                <input ref="menteetags" className="form-control" type="text"
                                       placeholder="Add or remove tags"
                                       id="mentee_tags">
                                </input>
                                <a onClick={this.addMenteeTags.bind(this)}>
                                    <img className="tagIcons" id="plusIcon" src="/plus-icon.png"/>
                                </a>
                                <a onClick={this.removeMenteeTags.bind(this)}>
                                    <img className="tagIcons" id="minusIcon" src="/minus-icon.png"/>
                                </a>
                            </p>
                            <div>
                              {this.props.user.profile.menteeTags.map(tag => {
                                return <span className="label label-info">{tag}</span>
                              })}
                            </div>
                        </form>

                        <div className="buttons">
                            <button className="btn btn-danger" onClick={() => this.cancelProfile()}>
                                Cancel
                            </button>
                            <div className="floatRight">
                                <button className="btn btn-success" onClick={() => this.saveProfile()}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.state.isEditAccount) {
            return (
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form className="form-horizontal">
                            <p>
                                <label>Email</label>
                                <input ref="email" className="form-control" type="text"
                                       defaultValue={this.props.user.emails[0].address} />
                            </p>
                            <p>
                                <label>New Password</label>
                                <input ref="newPassword" className="form-control" type="password" />
                                <label>Confirm Password</label>
                                <input ref="conPassword" className="form-control" type="password" />
                            </p>
                        </form>
                        <div className="buttons" id="editProfile">
                            <button className="btn btn-warning" onClick={() => Meteor.call('users.removeAccount')}>
                                Remove Account
                            </button>
                            <button className="btn btn-danger" onClick={() => this.cancelAccount()}>
                                Cancel
                            </button>
                            <div className="floatRight">
                                <button className="btn btn-success" onClick={() => this.saveAccount()}>
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
                    <div id="action-field2" className="col-md-4 col-md-offset-2">
                        <div className="side-by-side">
                            <img id="profile-pic" src={this.getAvatar()}/>
                            {this.renderButtons()}
                        </div>
                        {this.getProfile()}
                        <div className="col-md-2" id="information">
                            <div>
                                <b>{this.props.mentorsCount}</b> Mentors<span id="mentees">
                                <b>{this.props.menteesCount}</b> Mentees</span>
                                <span><a href={this.props.paramUser.profile.twitterURL}><img id="twitter" src="/twitter-icon.png"/></a></span>
                                <span> <a href={this.props.paramUser.profile.linkedInURL}><img id="linkedin" src="/linkedin-icon.png"/></a></span>
                                {Meteor.userId() !== null &&
                                <span><Link to="/messages"><img id="msg-prof" src="/message-icon.png"/></Link></span>}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-md-offset-2">
                        <input className="form-control" type="text" ref="advice" /><span><input type="submit"/></span>
                        <p>Render post here</p>
                    </div>
                </div>
            ); // end return()
        } //end else
    } //end render()
}; // end class Profile

export default createContainer((props) => {
    Meteor.subscribe('mentors');
    Meteor.subscribe('mentees');
    paramUser=Meteor.users.findOne({ username:props.params.username});
    const loading = !Meteor.subscribe('users').ready();
    userExist =  paramUser;
    return { user: Meteor.user(),
             paramUser: paramUser,
             loading:loading,
             userExist:userExist,
             mentors: Mentors.find({}).fetch(),
             mentees: Mentees.find({}).fetch(),
             mentorsCount: Mentors.find({}).count(),
             menteesCount: Mentees.find({}).count()
            };
}, Profile);

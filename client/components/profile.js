import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';
import { createContainer }  from 'meteor/react-meteor-data';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditProfile: false, isEditAccount: false };
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
            <div id="put-bottom">
                <h2>{this.props.user.profile.firstName}</h2>
                <p>{this.props.user.profile.blurb}</p>
            </div>
        );
    }

    renderButtons() {
        if (this.props.user) {
            return <p className="buttons">
                <a onClick={() => this.editProfile()}>
                    Edit Profile
                </a>
                <br/>
                <a onClick={() => this.editAccount()}>
                    Account Setting
                </a>
            </p>;
        }
        else {
            return <p className="specialButton">
                <button className="btn-secondary" id="request" onClick={() => this.setRequestSent()}>
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
      }
    }

    addMenteeTags(event) {
      event.preventDefault();
      tags = this.refs.menteetags.value;
      if (tags != "") {
          Meteor.call('users.addMenteeTags', tags);
      }
    }

    render() {
        if(!this.props.user) {
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
                                <label>Mentor Tags</label>
                                <input ref="mentortags" className="form-control" type="text"
                                     placeholder="Enter tags to include yourself in mentor search result"
                                     id="mentor_tags">
                                </input>
                                <a onClick={this.addMentorTags.bind(this)}>
                                    <img className="plusIcon" src="plus-icon.png"/>
                                </a>
                            </p>
                            <p>
                                <label>Mentee Tags</label>
                                <input ref="menteetags" className="form-control" type="text"
                                     placeholder="Enter tags to include yourself in mentee search result"
                                     id="mentee_tags">
                                </input>
                                <a onClick={this.addMenteeTags.bind(this)}>
                                    <img className="plusIcon" src="plus-icon.png"/>
                                </a>
                            </p>
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
                      <div className="buttons">
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
                    {/*<div className="buttons">*/}
                        {/*<button className="btn btn-primary" onClick={() => this.editProfile()}>*/}
                            {/*Edit Profile*/}
                        {/*</button> &nbsp;*/}
                        {/*<button className="btn btn-primary" onClick={() => this.editAccount()}>*/}
                            {/*Account Setting*/}
                        {/*</button>*/}
                    {/*</div>*/}
                    <div id="action-field2" className="col-md-4 col-md-offset-2">
                        <div className="side-by-side">
                            <img id="profile-pic" src={this.getAvatar()}/>
                            {this.renderButtons()}
                            {/*<p className="specialButton">*/}
                                {/*<button className="btn-secondary" id="request" onClick={() => this.setRequestSent()}>*/}
                                    {/*Add Mentor*/}
                                {/*</button>*/}
                            {/*</p>*/}
                        </div>
                        {this.getProfile()}
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

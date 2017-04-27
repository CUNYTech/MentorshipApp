import React        from "react";
import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Welcome      from './welcome';
import { createContainer }  from 'meteor/react-meteor-data';
import ReactDOM     from 'react-dom';


//we can move this later
class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordError: '', userError: '', mentorMenteeError:'', registerSucceeded: false, avatar:'' };
    }

    componentDidMount() {
        Slingshot.fileRestrictions('Avatar', {
            allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
            maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
        });
    }

    // checkStrength() {
    //     var strength = Accounts.zxcvbn(this.refs.t_password.value);
    //     var element;
    //
    //        if(strength.score==0){element =
    //             <ul>
    //                 <li className="strengthLevelBar strengthLevelNone"></li>
    //                 <li className="strengthLevelText">&nbsp;Terrible</li>
    //             </ul>
    //         ;}
    //     else if(strength.score==1){element =
    //         <ul>
    //             <li className="strengthLevelBar  strengthLevelLow"></li>
    //             <li className="strengthLevelText">&nbsp;Bad</li>
    //         </ul>
    //     ;}
    //     else if(strength.score==2){element =
    //         <ul>
    //             <li className="strengthLevelBar  strengthLevelMedium"></li>
    //             <li className="strengthLevelText">&nbsp;Fair</li>
    //         </ul>
    //     ;}
    //     else if(strength.score==3){element =
    //         <ul>
    //             <li className="strengthLevelBar strengthLevelStrong"></li>
    //             <li className="strengthLevelText">&nbsp;Good</li>
    //         </ul>
    //     ;}
    //     else if(strength.score==4){element =
    //         <ul>
    //             <li className="strengthLevelBar strengthLevelHigh"></li>
    //             <li className="strengthLevelText">&nbsp;Great</li>
    //         </ul>
    //     ;}
    //     ReactDOM.render(element, document.getElementById('passBar'));
    // }

    upload(){
        var userId = this.props.user._id;
        var metaContext = {avatarId: userId};
        var uploader = new Slingshot.Upload("Avatar", metaContext);
        uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) { // you can use refs if you like
            if (error) {
                console.error('Error uploading', uploader.xhr.response);
                alert (error);
            }
            else {
                Meteor.users.update(Meteor.userId(), {$set: {"profile.avatar": downloadUrl}});
            }
            this.setState({avatar: downloadUrl});
        }.bind(this));
    }



    handleSubmit(event) {
        event.preventDefault();

        const firstName = this.refs.t_fName.value;
        const lastName = this.refs.t_lName.value;
        const email = this.refs.t_email.value;
        const password = this.refs.t_password.value;
        const conPassword = this.refs.t_conPassword.value;
        const username = this.refs.t_username.value;
        const mentorTags = [];
        const menteeTags = [];
        const twitterUrl = this.refs.myTwitter.value;
        const linkedinUrl = this.refs.myLinkedIn.value;

        //Checks whether both password entries match
        if(password != conPassword) {
            this.setState({ passwordError: 'Passwords do not match' });
        }
        else {
            this.setState({ passwordError: '' });

            var user = { username:username, email: email, password: password,
                profile: { avatar: '', firstName: firstName, lastName: lastName, mentorTags: mentorTags,
                    menteeTags: menteeTags, twitterURL : twitterUrl, linkedInURL : linkedinUrl}};


            Accounts.createUser(user, (error) => {
              if (error) {
                this.setState({ userError: error.reason });
              }
              else {

                  Meteor.call('sendVerificationEmail');
                  this.setState({userError: '', registerSucceeded: true});

                  //for the avatar
                  let avatarUrl = this.state.avatar;
                  Meteor.users.update( { _id: Meteor.userId() }, {
                      $set: {'profile.avatar': avatarUrl}
                  });


              }



            }); //end Accounts.createUser()



        } // end else
    } //end handleSubmit

    //rendering Sign Up Page
    render (){
      if(!this.state.registerSucceeded) {
        return (
            <div className="form-group">
                <h2>Personal Information</h2>
                <form className="form-horizontal" onSubmit= {this.handleSubmit.bind(this)} >
                    <p>
                        <label>First Name </label>
                        <input ref="t_fName" className="form-control" type="text" required />
                    </p>
                    <p>
                        <label >Last Name </label>
                        <input ref="t_lName" className="form-control" type="text" required />
                    </p>
                    <p>
                        <label >Username </label>
                        <input ref="t_username" className="form-control" type="text" required />
                    </p>
                    <p>
                        <label>E-mail </label>
                        <input ref="t_email" className="form-control" type="email" required />
                    </p>
                    <p>
                        <label>Password </label>
                        <input ref="t_password" className="form-control" type="password" required />
                    </p>
                    {/*<div id="passBar"></div>*/}
                    <p>
                        <label>Confirm your password </label>
                        <input ref="t_conPassword" className="form-control" type="password" required />
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
                        <label>Upload Picture</label>
                        <input type="file" className="btn btn-file" name="datafile" id="input" onChange={this.upload.bind(this)} />
                    </p>
                    <div className="text-danger">{ this.state.passwordError }</div>
                    <p>
                        <input type="submit" value="Submit"/>
                    </p>
                    <div className="text-danger">{ this.state.userError }</div>
                </form>
            </div>
        ); //end return()
      }//end if
      else {
        return (
          <div><Welcome /></div>
        );
      }
    }; //end render()
} // end of class

export default createContainer(() => {
    return { user: Meteor.user()?  Meteor.user(): '' };
}, Registration);

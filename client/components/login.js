import React from 'react';




const LoginPage = () => {

    return(

        <div>
            <h3>Login</h3>
            <form >
                <p>
                    <label>Username: </label>
                    <input required="required" type="text" placeholder="John@gmail.com" />
                </p>

                <p>
                    <label >Password: </label>
                    <input required="required" type="text" placeholder="******" />
                </p>

                <p>
                    <input type="submit" value="Login"/>
                </p>


            </form>


        </div>

    );
};

export default LoginPage;
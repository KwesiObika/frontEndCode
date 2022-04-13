import React from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

class LoginLogoutToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: props.login,
        };
    }

    displayToggle() {
        if(this.state.login){
            return(
                <LogoutButton />
            );
        }
        else{
            return(
                <LoginButton />
            );
        }
    }
    render() {
        return(
            this.displayToggle() 
        );
    }
}

export default LoginLogoutToggle;
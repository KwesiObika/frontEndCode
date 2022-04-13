import React from "react";
import { Link } from "react-router-dom";
import '../style/button.css'

class LoginButton extends React.Component {
    render() {
        return(
            <Link to='/login'><div className="button">
                Login
            </div></Link>
        );
    }
}

export default LoginButton;
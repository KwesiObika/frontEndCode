import React from "react";
import { Link } from "react-router-dom";
import '../style/button.css';

class SignUpButton extends React.Component {
    render() {
        return(
            <Link to='/signup'><div className="button">
                Sign Up
            </div></Link>
        );
    }
}

export default SignUpButton;
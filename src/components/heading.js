import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "./signupbutton";
import logo from '../logo.svg'; 
import LightDarkButton from "./lightdarkbutton";
import '../style/heading.css';
import LoginLogoutToggle from "./loginlogouttoggle";

class Heading extends React.Component {
    render() {
        return(
            <div id="heading">
                <Link to='/' className="title-link">
                    <div id='title'>
                        CrowdCloud_
                    </div>
                </Link>
                {this.props.accountName}
                <LoginLogoutToggle />
                <SignUpButton />
                <LightDarkButton />
            </div>
        );
    }
}

export default Heading;
import React from "react";
import '../style/profile.css';


class ProfileTag extends React.Component {
    render() {
        return(
            <div id='profileTag'>
                <img  src = {this.props.user.image } alt = "user profile graphic"/>
                <div>{this.props.user.name}</div>
            </div>
        );
    }
}

export default ProfileTag;
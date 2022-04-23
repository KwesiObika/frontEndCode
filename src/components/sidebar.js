import React from "react";
import Navigation from "./navigation";
import '../style/sidebar.css'
import ProfileTag from "./profileTag";
import Logo from '../logo.svg';

class Sidebar extends React.Component {
    render() {
        return(
            <div id='sidebar' className="visible">
                Sidebar Component {this.props.sidebarVisible}
                <Navigation />
                <ProfileTag user = {{
                    image : Logo,
                    name : 'Sayan',
                }} />
            </div>
        );
    }
}

export default Sidebar;
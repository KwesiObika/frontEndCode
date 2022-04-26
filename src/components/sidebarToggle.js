import React from 'react';
import '../style/sidebartoggle.css'

class SidebarToggle extends React.Component {
    render() {
        return(
            <div id = 'toggleButton' onClick={ ()=> {this.props.sideChange()}}>
    
            </div>
        );
    }
}

export default SidebarToggle;
import React from 'react';

class SidebarToggle extends React.Component {
    render() {
        return(
            <div onClick={ ()=> {this.props.sideChange()}}>
                hide sidebar
            </div>
        );
    }
}

export default SidebarToggle;
import React from 'react';
import '../style/sidebartoggle.css'

class SidebarToggle extends React.Component {
    render() {
        return(
            <div id = 'toggleButton' onClick={ ()=> {this.props.sideChange()}}>
                <div id = {this.props.active ? 'bar-top-active' : 'bar-top'} className='bar'>

                </div>
                <div id ={this.props.active ? 'bar-bottom-active' : 'bar-bottom'} className='bar'>

                </div>
            </div>
        );
    }
}

export default SidebarToggle;
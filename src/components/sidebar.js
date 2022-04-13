import React from "react";
import Navigation from "./navigation";
import '../style/sidebar.css'

class Sidebar extends React.Component {
    addClass(){
        if(this.props.sidebarVisible){
            let sidebar = document.getElementById('sidebar');
            sidebar.classList.add('visible');
            sidebar.classList.remove('hidden')
        }
        else{
            let sidebar = document.getElementById('sidebar');
            sidebar.classList.remove('visible');
            sidebar.classList.add('hidden')
        }
    }
    render() {
        if(this.props.sidebarVisible){
            return(
                <div id='sidebar' className="visible">
                    Sidebar Component {this.props.sidebarVisible}
                    <Navigation />
                </div>
            );
        }
        else{
            return(
                <div id='sidebar' className="hidden">
                    Sidebar Component {this.props.sidebarVisible}
                    <Navigation />
                </div>
            );
        }
    }
}

export default Sidebar;
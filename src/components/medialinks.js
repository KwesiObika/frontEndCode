import React from "react";
import '../style/medialink.css';

class MediaLinks extends React.Component {
    render() {
        return(
            <div>
                <a href={this.props.link}>
                    <img className = 'mediaImage' src = {this.props.image} alt = {this.props.alt}/>
                </a>
                
            </div>
        );
    }
}

export default MediaLinks;
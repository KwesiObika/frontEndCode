import React from "react";
import "../style/homepage.css";
import image from "../style/images/26302.jpg";

class HomePage extends React.Component {
    render() {
        return(
            <div id="homePage">
                
                <br/>
                <p className="homepage_description">crowd cloud a decentrailized cloud compute platform</p>
                <br/>
                <a className="text"href='https://www.freepik.com/vectors/fluffy-clouds'>Fluffy clouds vector created by starline - www.freepik.com</a>
                <br/>
                <a className="text"href='https://www.freepik.com/vectors/night-sea'>Night sea vector created by vectorpouch - www.freepik.com </a>
                <img id = 'homepageImage' src = {image} alt='rock' />
                <div className="box" id = "box1">
                    1
                </div>
                <div className="box" id = "box2">
                    2
                </div>
                <div className="box" id = "box3">
                    3
                </div>
                <div className="long_box" id="uses">
                    long box
                </div>
                <div className="long_box" id="plans">
                    
                </div>
                <div className = "long_box" id = "setupNode">

                </div>
                <div className = "long_box" id = "connect">
                    
                </div>
            </div>
        );
    }
}

export default HomePage;

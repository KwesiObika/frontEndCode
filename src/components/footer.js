import React from "react";
import MediaLinks from "./medialinks";
import '../style/footer.css';
import Discord from '../style/logos/Discord-Logo-Black.png';
import GitHub from '../style/logos/GitHub-Mark-64px.png';

class Footer extends React.Component {
    render() {
        return(
            <div id='footer'>
                Footer Component
                <MediaLinks image = {GitHub}  link = {'https://github.com'} alt = 'github link with github logo' />
                <MediaLinks image = {Discord}  link = {'https://discord.com'} alt = 'discord link with github logo' />
                <MediaLinks image = {GitHub}  link = {'https://github.com'} alt = 'github link with github logo' />
            </div>
        );
    }
}

export default Footer;
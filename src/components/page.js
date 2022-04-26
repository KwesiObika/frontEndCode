import React from "react";
import '../style/page.css';
import Card from "./card";
import logo from '../logo.svg'

class Page extends React.Component {
    render() {
        return(
        
            <div id='page'>
                Page Component {this.props.pageType} <br/>
                <Card textBox = "hi mom" image = {logo}/>
                <Card textBox = "hi mom" image = {logo}/>
                <Card textBox = "hi mom" image = {logo}/>
            </div>
        );
    }
}

export default Page;
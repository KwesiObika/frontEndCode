import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import '../style/navigation.css'

class Navigation extends React.Component {

    displayLinks(){
        //getCurrentUserLinks from profile
        //display static links
    }
    render() {
        return(
            <div>
                <Button variant="text"><Link className="nav-link" to='/'>Home</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/about'>About</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/account'>Account</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/dashboard'>Dashboard</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/setup'>Setup</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/login'>Login</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/settings'>Settings</Link></Button><br/>
                <Button variant="text"><Link className="nav-link" to='/signup'>Sign Up</Link></Button><br/>
                {this.displayLinks()}
            </div>
        );
    }
}

export default Navigation;
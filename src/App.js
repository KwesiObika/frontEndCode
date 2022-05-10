import './App.css';
import Sidebar from './components/sidebar';
import Heading from './components/heading';
import Footer from './components/footer';
import PageContent from './components/pagecontent';
import Page from './components/page.js';
import SidebarToggle from './components/sidebarToggle';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/homepage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      userID: null,
      sidebarShown: true,
    };
  }

  sidebarSwitch(){
    let sidebar = this.state.sidebarShown;
    sidebar = !sidebar;
    this.setState({sidebarShown: sidebar });
    console.log(this.state.sidebarShown);
  }

  loginUser(){
    let login = this.state.login;
    let userID = this.state.userID;
    login = true;
    userID = 5;
    this.setState({login : login});
    this.setState({userID : userID});
  }

  logoutUser(){
    let logout = this.state.login;
    logout = false;
    this.setState({login : logout});

  }

  render() {
    return (
      <main>
        <title>X network or cloudCrowd</title>
        <Router>
          <div id={this.state.sidebarShown ? 'layout' : 'layout2'}>
            <div id='heading-container'><Heading accountName = "jim"/></div>
            <div id='sidebar-container' className={this.state.sidebarShown ? 'shown' : 'hidden'}><Sidebar sidebarVisible = { this.state.sidebarShown } /></div>
            <div id = 'sidebar-toggle' className={this.state.sidebarShown ? 'tog' : 'gle'}><SidebarToggle sideChange = {() => this.sidebarSwitch() } active = {this.state.sidebarShown}/></div>
            <div id='page-container' className={this.state.sidebarShown ? 'narrow' : 'wide'} ><Routes>
              <Route exact path="/home" element={
                <HomePage sidebarVisible = {this.state.sidebarShown}/>
              } />
              <Route exact path="/about" element={
                <Page login = {true} pageType = 'about' sidebarVisible = {this.state.sidebarShown}/>
              } />
              <Route exact path="/account" element={
                <Page login = {true} pageType = 'account' sidebarVisible = {this.state.sidebarShown}/>
              } />
              <Route exact path="/dashboard" element={
                <Page login = {true} pageType = 'dashboard' sidebarVisible = {this.state.sidebarShown}/>
              } />
              <Route exact path="/setup" element={
                <Page login = {true} pageType = 'setup' sidebarVisible = {this.state.sidebarShown} />
              } />
              <Route exact path="/login" element={
                <Page login = {true} pageType = 'login' sidebarVisible = {this.state.sidebarShown} />
              } />
              <Route exact path="/settings" element={
                <Page login = {true} pageType = 'settings' sidebarVisible = {this.state.sidebarShown} />
              } />
              <Route exact path="/signup" element={
                <Page login = {true} pageType = 'signup' sidebarVisible = {this.state.sidebarShown} />
              } />
              <Route exact path="/" element={
                <HomePage sidebarVisible = {this.state.sidebarShown} />
              } />
              <Route path="/*" element={
                <Page login = {true} pageType = 'error' sidebarVisible = {this.state.sidebarShown} />
              } />
            </Routes></div>
            <div id = 'footer-container'><Footer /></div>
          </div> 
        </Router>
      </main>
    );
  }
}

export default App;

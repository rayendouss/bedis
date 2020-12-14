import React, { Component } from 'react';
import { Switch, Route, Redirect , BrowserRouter as Router ,useParams } from 'react-router-dom';
import NavBar from "./NavBarComponent"
import ContactUs from "./ContactUsComponent";
import Documentation from "./DocumentationComponent";
import Home from "./HomeComponent"
class MenuComponent extends Component{
render() {
    return (

        <Router>
            <div >
                <NavBar />
                <Route exact path="/" > <Home /></Route>
                <Route exact path="/contactus" > <ContactUs /></Route>
                <Route exact path="/documentation" > <Documentation /></Route>
            </div>
        </Router>
            )
}
}

export default MenuComponent;


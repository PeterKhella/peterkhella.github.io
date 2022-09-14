import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import logo from './images/logo1.png';
import { Button } from './Button';
import './Navbar.css'

class Navbar extends Component {
    //  stating whenever you click on something, true or false
    state = { clicked: false }
    // fucntion for handleClick - setState to opposite value whenever clicked
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* if this is clicked it will change the state from it will be times
                    if not it will be bars */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                    <div className="navbar-logo"><a href='/app.js'><img src={logo} className="logo-img"></img></a></div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* imports MenuItems, then maps array */}
                    {MenuItems.map((item, index) => {
                        return (
                            // a className is equal to item.cName, cname in MenuItems.js is 
                            // equal to nav-links
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sing Up</Button> */}
            </nav>
        )
    }
}

export default Navbar
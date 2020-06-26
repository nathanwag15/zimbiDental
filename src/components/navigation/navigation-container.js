import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo/logo.png";


export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="nav-header">
                <div className="column-header">
                    <div className="left-column">
                        <img src={logo} />
                    </div>

                    <div className="center-column">
                        <NavLink exact to="/" className="nav-link">
                            Home
                        </NavLink>

                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>

                        <NavLink to="/contact" className="nav-link">
                            Contact Us
                        </NavLink>

                        <NavLink to="/office" className="nav-link">
                            Our Office
                        </NavLink>

                        <NavLink to="/referrals" className="nav-link">
                            Referrals
                        </NavLink>

                        <NavLink to="apnea" className="nav-link">
                            Sleep Apnea
                        </NavLink>
                    </div>
                    <div className="right-column">

                    </div>
                </div>
            </div>
        )
    }
}
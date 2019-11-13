import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {

    state = {};

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

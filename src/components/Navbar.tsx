import React from 'react';
import "../css/Nav.css";


class Navbar extends React.Component {
    
    /**
     * Render navbar component
     */
    public render() {
        return (
            <nav className="nav-bar">
                <a href="#apps">Apps</a>
                <a href="#games">Games</a>
            </nav>
        );
    }
}

export default Navbar;

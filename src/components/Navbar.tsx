import React from 'react';
import "../css/Nav.css";

/**
 * Interface for props
 */
interface Props {
    aboutId: string;
}

class Navbar extends React.Component<Props> {

    /**
     * Render navbar component
     */
    public render() {
        const { aboutId } = this.props;
        return (
            <nav className="nav-bar">
                <a href={`#${aboutId})`}>About</a>
            </nav>
        );
    }
}

export default Navbar;

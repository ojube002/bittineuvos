import React from 'react';
import "../css/Nav.css";

/**
 * Interface for props
 */
interface State {
    width: number
    selectedPage: string,
    isOpen: Boolean
}
/**
 * Interface for props
 */
interface Props {
    appsId: string;
    gamesId: string;
    aboutId: string;
}

class Navbar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            selectedPage: "apps",
            isOpen: false
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    /**
     * Render navbar component
     */
    public render() {
        const { appsId, gamesId, aboutId } = this.props;
        const { width } = this.state;
        const isMobile = width <= 800;
        // the rest is the same...

        if (isMobile) {
            return (
                <React.Fragment>
                    <nav className="nav-bar">
                        <div className="item">
                            <a href={`#${appsId})`}>Home</a>
                            <button onClick={() => this.setState({ isOpen: !this.state.isOpen })}> {this.state.isOpen ? '▲' : '▼'}</button>
                        </div>
                        <div className={this.state.isOpen ? "" : "hidden"}>
                            <div className="item"><a href={`#${appsId})`}>Apps</a></div>
                            <div className="item"><a href={`#${gamesId})`}>Games</a></div>
                            <div className="item"><a href={`#${aboutId})`}>About</a></div>
                        </div>
                    </nav>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <nav className="nav-bar">
                        <a href={`#${aboutId})`}>About</a>
                        <a href={`#${aboutId})`}>About</a>
                        <a href={`#${aboutId})`}>About</a>
                    </nav>
                </React.Fragment>
            );
        }

    }
}

export default Navbar;

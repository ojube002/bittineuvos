import React from 'react';
import Navbar from './Navbar';
import About from './About';
import FrontPage from './FrontPage';
import "../css/App.css";

/**
 * Interface for props
 */
interface Props {
}

/**
 * Interface for props
 */
interface State {

}



class App extends React.Component<Props, State> {

  /**
   * Constructor
   * @param props component properties 
   */
  constructor(props: Props) {
    super(props);
    this.state = {

    }

  }

  /**
   * Render app component
   */
  public render() {
    return (
      <React.Fragment>
        <main >
          <Navbar aboutId="about" />
          <FrontPage id="frontPage" className="frontpage-container" title={"Bittineuvos"} description={"It's all about the ones and zeros"} />
          <About id="about" className="about-container" />
        </main>
      </React.Fragment>
    );
  }

}

export default App;

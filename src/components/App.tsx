import React from 'react';
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
  title: string;
  description: string;
}



class App extends React.Component<Props, State> {

  /**
   * Constructor
   * @param props component properties 
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      title: "Bittineuvos",
      description: "It's all about the ones and zeros"
    }

  }

  /**
   * Render app component
   */
  public render() {
    return (
      <main >
        <div className="main-container">
          <div className="title">
            <span>
              {this.state.title}
            </span>
          </div>
          <div className="description">
            <span>
              {this.state.description}
            </span>
          </div>
        </div>
      </main>
    );
  }

}

export default App;

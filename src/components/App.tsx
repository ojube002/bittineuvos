import React from 'react';
import Canvas from './Canvas';
import Navbar from './Navbar';
import "../css/App.css";
import "../css/Nav.css";

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
  rotation: number;
  matrixArray?: number[][],
  rowCount: number,
  columnCount: number
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
      description: "It's all about the ones and zeros",
      rotation: 0,
      rowCount: 50,
      columnCount: 125
    }

  }

  public componentDidMount() {
    this.updateMatrixArray();

    setInterval(() => {
      this.updateMatrixArray();
    }, 500);

  }

  public updateMatrixArray = () => {
    const matrixArray: number[][] = this.buildMatrix(this.state.rowCount, this.state.columnCount);
    this.setState({ matrixArray });
  }


  private buildMatrix = (rowCount: number, columnCount: number) => {
    const matrix: any = [];

    for (let i = 0; i < rowCount; i++) {
      const column: any = [];
      for (let j = 0; j < columnCount; j++) {
        const randNumber = Math.round(Math.random() * 1);
        column.push(randNumber);
      }
      matrix.push(column);
    }

    return matrix;
  }

  /**
   * Render app component
   */
  public render() {
    return (
      <React.Fragment>
        <Navbar />
        <main >
          <Canvas
            matrixArray={this.state.matrixArray}
            textHeight={Math.ceil(window.innerHeight / this.state.rowCount)}
            textWidth={Math.ceil(window.innerWidth / this.state.columnCount)}
            canvasName={"matrix-canvas"}
            width={window.innerWidth}
            height={window.innerHeight}
          />
          <div id="frontPage" className="main-container">
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
          <div id="apps" className="container">
          </div>
          <div id="games" className="container">
          </div>
        </main>
      </React.Fragment>
    );
  }

}

export default App;

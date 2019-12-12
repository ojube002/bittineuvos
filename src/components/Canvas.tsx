import React from 'react';
import "../css/Canvas.css";

/**
 * Interface for props
 */
interface Props {
    canvasName: string;
    width: number;
    height: number;
}



/**
 * Interface for props
 */
interface State {
    context?: CanvasRenderingContext2D;
    matrixArray?: number[][];
    rowCount: number;
    columnCount: number;
    textHeight: number;
    textWidth: number;
    updateCanvasTime: number;
    interval?: any;
}

class Canvas extends React.Component<Props, State> {

    /**
     * Constructor
     * @param props component properties 
     */
    constructor(props: Props) {
        super(props);
        this.state = {
            rowCount: 50,
            columnCount: 120,
            textWidth: 0,
            textHeight: 0,
            updateCanvasTime: 500
        }
    }

    /**
     * Component did mount life-cycle event
     */
    public componentDidMount() {
        const rowCount = this.props.height > 1000 ? 50 : 40;
        const columnCount = this.props.height > 1000 ? 120 : 80;
        this.updateMatrixArray(rowCount, columnCount);
    }

    /**
     * Component did update life-cycle event
     */
    public componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevState.matrixArray !== this.state.matrixArray) {
            this.updateCanvas();
        }

        if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
            if (this.state.interval)
                clearInterval(this.state.interval);

            this.initializeValues();
        }

    }

    private initializeValues = () => {
        const rowCount = this.props.height > 1000 ? 50 : 40;
        const columnCount = this.props.height > 1000 ? 120 : 80;

        const interval = setInterval(() => {
            this.updateMatrixArray(rowCount, columnCount);
        }, this.state.updateCanvasTime);

        const canvasRef: any = this.refs.canvas;
        const context = canvasRef.getContext("2d");

        const textHeight = Math.ceil(this.props.height / rowCount);
        const textWidth = Math.ceil(this.props.width / columnCount);
        this.setState({
            context,
            textHeight,
            textWidth,
            interval
        });
    }

    /**
     * Updates canvas every
     */
    private updateCanvas = () => {
        if (!this.state.context || !this.state.matrixArray) return;

        const { width, height } = this.props;
        const { matrixArray, textWidth, textHeight } = this.state;
        const { context } = this.state;
        const fontSize = height > 1000 ? 14 : 8;
        context.clearRect(0, 0, width, height * 2);
        context.save();
        for (let i = 0; i < matrixArray.length; i++) {
            const row = matrixArray[i];
            const opacity = (1 - (i / matrixArray.length)).toFixed(2);
            context.fillStyle = `rgb(116, 116, 24, ${opacity})`;
            for (let j = 0; j < row.length; j++) {
                const number = row[j].toString();
                context.fillText(number, j * textWidth, i * textHeight, textWidth);
                context.font = `${fontSize}pt Bowlby One SC`;
            }
        }
        context.restore();
    }


    /**
     * Update matrix array
     */
    public updateMatrixArray = (rowCount : number, columnCount : number) => {
        const matrixArray: number[][] = this.buildMatrix(rowCount, columnCount);
        this.setState({ matrixArray });
    }

    /**
     * builds matrix
     */
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
        const { canvasName, width, height } = this.props;
        return (
            <canvas
                ref="canvas"
                className={canvasName}
                width={width}
                height={height + 1000}
            />
        );
    }
}

export default Canvas;

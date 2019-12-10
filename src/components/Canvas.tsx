import React from 'react';
import "../css/Canvas.css";

/**
 * Interface for props
 */
interface Props {
    width: number;
    height: number;
    matrixArray?: number[][];
    canvasName: string;
    textHeight: number;
    textWidth: number;
}



/**
 * Interface for props
 */
interface State {
    context?: CanvasRenderingContext2D,
}

class Canvas extends React.Component<Props, State> {

    /**
     * Constructor
     * @param props component properties 
     */
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    public componentDidMount() {
        const canvasRef: any = this.refs.canvas;
        const context = canvasRef.getContext("2d");
        this.setState({ context });
    }

    public componentDidUpdate() {
        this.updateCanvas();
    }

    private updateCanvas = () => {
        if (!this.state.context || !this.props.matrixArray) return;
        const { width, height, matrixArray } = this.props;
        const { context } = this.state;
        context.clearRect(0, 0, width, height);
        context.save();
        for (let i = 0; i < matrixArray.length; i++) {
            const row = matrixArray[i];
            const opacity = (1 - (i / matrixArray.length)).toFixed(2);
            context.fillStyle = `rgb(116, 116, 24, ${opacity})`;
            for (let j = 0; j < row.length; j++) {
                const number = row[j].toString();
                context.fillText(number, j * this.props.textWidth, i * this.props.textHeight, this.props.textWidth);
                context.font = "14pt Bowlby One SC";
            }
        }
        context.restore();
    }

    /**
     * Render app component
     */
    public render() {
        const { width, height, canvasName } = this.props;
        return (
            <canvas
                ref="canvas"
                className={canvasName}
                width={width}
                height={height}
            />
        );
    }
}

export default Canvas;

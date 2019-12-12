import React from 'react';
import "../css/Frontpage.css";
import Canvas from './Canvas';
import ResizeDetector from 'react-resize-detector';


/**
 * Interface for props
 */
interface Props {
    id: string;
    className: string;
    title: string;
    description: string;
}

/**
 * Interface for props
 */
interface State {
    height: number
}

class FrontPage extends React.Component<Props, State> {

    /**
     * Constructor
     * @param props component properties 
     */
    constructor(props: Props) {
        super(props);
        this.state = {
            height: window.innerHeight
        }
    }

    /**
     * Render app component
     */
    public render() {
        const { title, description, className, id } = this.props;
        return (
            <ResizeDetector
                handleWidth
                onResize={() => {
                    this.setState({ height: window.innerHeight });
                }}
                render={({ width }) => (
                    <React.Fragment>
                        <Canvas width={width} height={this.state.height} canvasName={"matrix-canvas"} />
                        <div id={id} className={className}>
                            <div className="title">
                                <span>
                                    {title}
                                </span>
                            </div>
                            <div className="description">
                                <span>
                                    {description}
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            />
        );
    }
}

export default FrontPage;

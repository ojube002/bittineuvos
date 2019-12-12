import React from 'react';
import "../css/About.css";

/**
 * Interface for props
 */
interface Props {
    id: string;
    className: string
}

/**
 * Interface for props
 */
interface State {
}

class About extends React.Component<Props, State> {

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
        const { id, className } = this.props;
        return (
            <div id={id} className={className}>
            </div>
        );
    }
}

export default About;

import {Component} from 'react';
import PropTypes from 'prop-types';
import DistanceMQTTClient from './DistanceMQTTClient';

/**
 * The single label. It has a name and a className and contains a 
 * generic child.
 * 
 * @arguments {Component<Props, State>}
 */
class DistanceLabel extends Component {

    static propTypes = {
        name: PropTypes.string, 
        className: PropTypes.string, 
    }

    render() {
        return (
            <div className={"distance-label " + this.props.className}>
                <div className="distance-label-name">
                    {this.props.name}
                </div>
                <div className="distance-label-value">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/**
 * A fixed bottom bar which displays the 3 distances
 */
class DistanceNumbers extends Component {

    render() {
        return (
            <div className="distance-numbers-bar">
                <div className="distance-labels-container">
                    <DistanceLabel name={"LEFT"} className="distance-label-left" >
                        <DistanceMQTTClient topicName={"left"} />
                    </DistanceLabel>
                    <DistanceLabel name={"CENTER"} className="distance-label-center" >
                        <DistanceMQTTClient topicName={"center"} />
                    </DistanceLabel>
                    <DistanceLabel name={"CENTER"} className="distance-label-right" >
                        <DistanceMQTTClient topicName={"right"} />
                    </DistanceLabel>
                </div>
            </div>
        );
    }
}

export default DistanceNumbers;
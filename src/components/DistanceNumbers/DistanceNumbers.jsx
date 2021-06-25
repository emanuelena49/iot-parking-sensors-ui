import {Component} from 'react';
import PropTypes from 'prop-types';
import DistanceMQTTClient from './DistanceMQTTClient';
import './DistanceNumbers.scss';

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
                    <DistanceLabel name={"left"} className="distance-label-left" >
                        <DistanceMQTTClient topicName={"distances/left"} />
                    </DistanceLabel>
                    <DistanceLabel name={"center"} className="distance-label-center" >
                        <DistanceMQTTClient topicName={"distances/center"} />
                    </DistanceLabel>
                    <DistanceLabel name={"right"} className="distance-label-right" >
                        <DistanceMQTTClient topicName={"distances/right"} />
                    </DistanceLabel>
                </div>
            </div>
        );
    }
}

export default DistanceNumbers;
export {DistanceNumbers};
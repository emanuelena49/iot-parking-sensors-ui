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
 * 
 * @arguments {Component<Props, State>}
 */
class DistanceNumbers extends Component {

    static propTypes = {
        topicNames: PropTypes.object, 
        brokerAddress: PropTypes.string, 
    }

    static defaultProps = {
        topicNames: {
            "left": "/distances/left", 
            "center": "/distances/center", 
            "right": "/distances/right"
        }, 
        brokerAddress: "mqtt://192.168.1.133:8883"
    }

    render() {
        return (
            <div className="distance-numbers-bar">
                <div className="distance-labels-container">
                    <DistanceLabel name={"left"} className="distance-label-left" >
                        <DistanceMQTTClient topicName={this.props.topicNames["left"]} 
                            brokerAddress={this.props.brokerAddress} />
                    </DistanceLabel>
                    <DistanceLabel name={"center"} className="distance-label-center" >
                        <DistanceMQTTClient topicName={this.props.topicNames["center"]} 
                            brokerAddress={this.props.brokerAddress} />
                    </DistanceLabel>
                    <DistanceLabel name={"right"} className="distance-label-right" >
                        <DistanceMQTTClient topicName={this.props.topicNames["right"]} 
                            brokerAddress={this.props.brokerAddress} />
                    </DistanceLabel>
                </div>
            </div>
        );
    }
}

export default DistanceNumbers;
export {DistanceNumbers};
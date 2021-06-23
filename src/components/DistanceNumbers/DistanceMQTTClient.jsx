import { Component } from "react";
import PropTypes from 'prop-types';
import round from "../../utils/round";

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')

/**
 * An mqtt client which displays an updated distance value 
 * (retrieved from an mqtt topic's messages)
 * 
 * @augments {Component<Props, State>}
 */
class DistanceMQTTClient extends Component {

    static propTypes = {
        topicName: PropTypes.string, 
    }

    constructor(props) {
        super(prosp);

        this.state = {
            /** the last value received from mqtt topic */
            value: "-.--m", 
        };
    }

    /**
     * 
     * @param {String} newValue <- new value you want to print
     */
    updateValue(newValue) {

        // value in meters (and rounded)
        newValue = round(newValue/100, 2);

        // TODO: real code for real mqtt client
            
        // get recieved value as str
        let newValueStr = message; /*newValue.toString();

        // add missing zeros
        for (let i=newValueStr.length; i<4; i++) {
            newValueStr += "0";
        }

        // add measure units (meters)
        newValueStr += "m";*/

        // set the new value (update state so component will re-render)
        this.setState((state, props) => ({
            value: newValueStr, 
        }));
    }

    componentDidMount() {
        
        // connect and subscribe
        client.on('connect', function () {
            client.subscribe('presence', function (err) {
              if (!err) {
                client.publish('presence', 'Hello mqtt')
              }
            })
        });

        let thisObject = this;

        client.on('message', function (topic, message) {

            if (topic == thisObject.props.topicName) {
                // when I recieved message on this topic I update the component
                thisObject.updateValue(message);
            }
        });
    }
    
    render () {
        // just print (a fresh) value
        // (it will re-render every time I recieve a message)
        return this.state.value;
    }
}

export default DistanceMQTTClient;
export {DistanceMQTTClient};
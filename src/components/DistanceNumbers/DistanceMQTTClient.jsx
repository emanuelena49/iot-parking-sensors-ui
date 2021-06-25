import { Component } from "react";
import PropTypes from 'prop-types';
import round from "../../utils/round";

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.133:8883');
// var client = mqtt.connect("ws://test.mosquitto.org:8883");


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
        super(props);

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

        // let newValueStr = newValue;

        // value in meters (and rounded)
        newValue = round(newValue/100, 2);

        // TODO: real code for real mqtt client
            
        // get recieved value as str
        let newValueStr = newValue; newValue.toString();

        // add missing zeros
        for (let i=newValueStr.length; i<4; i++) {
            newValueStr += "0";
        }

        // add measure units (meters)
        newValueStr += "m";

        // set the new value (update state so component will re-render)
        this.setState({
            value: newValueStr, 
        });
    }

    componentDidMount() {

        // alert("ok");
        
        let thisObject = this;
        let topicName = this.props.topicName;

        // connect and subscribe
        client.on('connect', function () {
            client.subscribe(topicName, function (err) {
              if (!err) {
                // client.publish('presence', 'Hello mqtt');
                console.log("ok, subscribed to " + topicName);
              } else {
                console.error("cannot subscribe to " + topicName, err);
              }
            })
        });

        // listen for messages
        client.on('message', function (topic, message) {

            // alert(topic, message);

            // alert("received " + message + " on " + topic);
            if (topic === topicName) {
                // when I recieved message on this topic I update the component
                thisObject.updateValue(parseInt(message));
            }
        });
    }

    componentWillUnmount() {
        // (unsubscribe)
        client.unsubscribe(this.props.topicName);
    }
    
    render () {
        // just print (a fresh) value
        // (it will re-render every time I recieve a message)
        return <span>{this.state.value + ""}</span>;
    }
}

export default DistanceMQTTClient;
export {DistanceMQTTClient};
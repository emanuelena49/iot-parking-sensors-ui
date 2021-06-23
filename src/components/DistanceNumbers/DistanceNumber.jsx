const react = require("react");

/**
 * @argument {react.Component<Props, State>}
 */
class DistanceLabel extends react.Component {

    static propTypes = {
        name: PropTypes.number, 
        value: String, 
        className: String, 
    }

    render() {
        return (
            <div className={"distance-label " + this.props.className}>
                <div className="distance-label-name">
                    {this.props.name}
                </div>
                <div className="distance-label-value">
                    {this.props.value}
                </div>
            </div>
        );
    }
}

class DistanceNumbers extends react.Component {

    render() {
        return (
            <div className="distance-numbers-bar">
                <div className="distance-labels-container">
                    <DistanceLabel name={"LEFT"} value={"2.50m"} className="distance-label-left" />
                    <DistanceLabel name={"CENTER"} value={"2.50m"} className="distance-label-center" />
                    <DistanceLabel name={"CENTER"} value={"-.--m"} className="distance-label-right" />
                </div>
            </div>
        );
    }
}

export default DistanceNumbers;
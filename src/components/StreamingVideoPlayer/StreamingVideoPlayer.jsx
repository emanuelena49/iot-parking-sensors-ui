import { Component } from "react";
import './StreamingVideoPlayer.scss';
import PropTypes from 'prop-types';


/**
 * Just the streaming video player which displays the real time video
 * 
 * @arguments {Component<Props, State>}
 */
class StreamingVideoPlayer extends Component {

    static propTypes = {
        frameWidth: PropTypes.number, 
        frameHeight: PropTypes.number, 
        source: PropTypes.string, 
    }

    static defaultProps = {
        frameWidth: 640, 
        frameHeight: 480, 
        source: "https://upload.wikimedia.org/wikipedia/commons/5/5c/640x480-afframont_ujamondrone_leitosa.JPG"
    }

    constructor(props) {
        super(props);

        this.state = { 
            /** current component width */
            width: 0, 
            /** current component height */
            height: 0 
        };

        // update component w. and h. when window resizes
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        // calculate the frame ratio
        this.frameRatio = props.frameWidth/props.frameHeight;
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        // this.setState({
        //     width: window.innerWidth, 
        //     height: window.innerHeight 
        // });

        let width = document.getElementById('video-player').clientWidth;
        let height = document.getElementById('video-player').clientHeight;

        this.setState({
            width: width, 
            height: height, 
        });
    }

    render() {
        let currentWindowRatio = this.state.width/this.state.height;
        let containerClass;
        
        if (currentWindowRatio<=this.frameRatio) {
            containerClass = "frame-container-1";
        } else {
            containerClass = "frame-container-2";
        }
        
        return (
            <div className="streaming-video-player" id="video-player">
                <div className={"frame-container " + containerClass}>
                    <img src={this.props.source} alt="No video available!" /> 
                </div>
            </div>
        );
    }
}

export default StreamingVideoPlayer;
export {StreamingVideoPlayer};
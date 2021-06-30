import './App.scss';
import { Component } from 'react';
import StreamingVideoPlayer from './components/StreamingVideoPlayer/StreamingVideoPlayer';
import DistanceNumbers from './components/DistanceNumbers/DistanceNumbers';
import config from './config';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="video-container">
          <StreamingVideoPlayer source={config.video.address} 
            frameWidth={config.video.width} frameHeight={config.video.height} />
        </div>
        <div className="distance-container">
          <DistanceNumbers brokerAddress={config.mqtt.address}
            topicNames={config.mqtt.topics} />
        </div>
      </div>
    );
  }
}

export default App;

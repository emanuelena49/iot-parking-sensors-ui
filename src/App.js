import './App.scss';
import { Component } from 'react';
import StreamingVideoPlayer from './components/StreamingVideoPlayer/StreamingVideoPlayer';
import DistanceNumbers from './components/DistanceNumbers/DistanceNumbers';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="video-container">
          <StreamingVideoPlayer />
        </div>
        <div className="distance-container">
          <DistanceNumbers />
        </div>
      </div>
    );
  }
  
}

export default App;

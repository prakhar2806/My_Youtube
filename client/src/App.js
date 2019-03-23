import React, { Component } from 'react';
import './App.css';
import VideoData from './VideoData';
import ChannelData from './ChannelData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    const divStyle = {
      margin: '40px',
      border: '5px solid grey'
    };
    return (
      <div className="App" >
        <ChannelData></ChannelData>
        <div style={divStyle}>
          <VideoData title="asdasd" />
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import VideoData from './VideoData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.data}</p>
        <VideoData title="asdasd" />
      </div>
    );
  }
}

export default App;
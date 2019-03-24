import React, { Component } from 'react';
import './App.css';
import ChannelData from './ChannelData';
import SearchData from './SearchData';
import AddChannel from './AddChannel';
import VideoData from './VideoData';
import AddVideo from './AddVideo';

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
      border: '5px solid grey',
    };

    const headerStyle = {
      padding: '10px 16px',
      background: '#054cbf',
      color: '#f1f1f1'
    }

    const AddMethodStyle = {
      width: '50%',
      float: 'left',
      textalign: 'center'
    }

    const rowStyle = {
      margin: '10px'
    }

    return (
      <div className="App" >
        <div class="header" id="myHeader" style={headerStyle}>
          <h2>Youtube Project</h2>
        </div>
        <div class="row" style={rowStyle}>
          <div class="column" style={AddMethodStyle}>
            <AddChannel ></AddChannel>
          </div>
          <div class="column" style={AddMethodStyle}>
            <AddVideo ></AddVideo>
          </div>
        </div>
        <div style={divStyle}>
          <SearchData></SearchData>
        </div>
        <div style={divStyle}>
          <ChannelData />
        </div>
        <div style={divStyle}>
          <VideoData />
        </div>
      </div >
    );
  }
}

export default App;
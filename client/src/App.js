import React, { Component } from 'react';
import './App.css';
import ChannelData from './ChannelData';
import SearchData from './SearchData';
import AddChannel from './AddChannel';

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
        <AddChannel></AddChannel>
        <SearchData></SearchData>
        <div style={divStyle}>
          <ChannelData title="asdasd" />
        </div>
      </div >
    );
  }
}

export default App;
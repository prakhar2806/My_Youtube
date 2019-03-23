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

  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res[0].url }))
  //     .catch(err => console.log(err));
  // }
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/videos/getAllVideos');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };

  // handleClick() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res[0].url }))
  //     .catch(err => console.log(err));
  // }

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
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      data: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/videos/test');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  handleClick() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
        <button onClick={this.handleClick}>test</button>

      </div>
    );
  }
}

export default App;
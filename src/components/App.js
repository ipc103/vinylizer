import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Vinylizer</h2>
        </div>
        <p className="App-intro">
          <a href='/login'>Log In With Spotify</a> to get started.
        </p>
      </div>
    );
  }
}

export default App;

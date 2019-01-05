import React, { Component } from 'react';
import Window from './Window/Window';

class App extends Component {
  render() {
    return (
      <div className="chat-app">
        <div className="chat-app__container">
          <Window />
        </div>
      </div>
    );
  }
}

export default App;

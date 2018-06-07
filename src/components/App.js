import React, { Component } from 'react';
import './App.css';
import AddCountContainer from '../containers/AddCountContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AddCountContainer/>
      <br/>
      <br/>
      </div>
    );
  }
}
export default App
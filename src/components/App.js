import React, { Component } from 'react';
import './App.css';
import CountContainer from '../containers/CountContainer'
import TodoContainer from '../containers/TodoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Count App</h1>
      <CountContainer/>
      <h1>Todo List</h1>
      <TodoContainer/>
      <br/>
      <br/>
      </div>
    );
  }
}
export default App
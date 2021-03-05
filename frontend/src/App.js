import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FirstComponent from './components/learning-examples/FirstComponent.jsx';
import SecondComponent from './components/learning-examples/SecondComponent.jsx';
import ThirdComponent from './components/learning-examples/ThirdComponent.jsx';
import FourthComponent from './components/learning-examples/FourthComponent.jsx';
import Counter from './components/counter/Counter.jsx';
import TodoApp from './components/todo/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <TodoApp></TodoApp>
        
      </div>
    );
  }
}


class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
      My Hello world
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      </div>
    )
  }
}

export default App;
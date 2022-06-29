import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTW4iLHGLgsnQqESA0hibuOcB6QdkRrpHnrA&usqp=CAU"
      },
    ]
  };

  handleIncrement = () => {
    const counters = [...this.state.counters];

    counters.push({
      id: 1,
      value: 0,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTW4iLHGLgsnQqESA0hibuOcB6QdkRrpHnrA&usqp=CAU"
    });
    this.setState({ counters});
  }
  handleDecrement = () => {
    const counters = [...this.state.counters];
    counters.pop();
    this.setState({
      counters
    });
  }
  handleDoubleDecrement = () => {
    const counters = [...this.state.counters];
    counters.splice(counters.length - 2, 2);
    this.setState({
      counters
    });
  }
  handleTripleDecrement = () => {
    const counters = [...this.state.counters];
    counters.splice(counters.length -3, 3);
    console.log("triple")
    this.setState({
      counters
    });
  }

  render() {
    return (
      <div className='main_wrap'>
        <div className='container'>
        <Counters 
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDoubleDecrement={this.handleDoubleDecrement}
        onTripleDecrement={this.handleTripleDecrement}
        />
        </div>
      </div>
    )
  }
}


export default App;

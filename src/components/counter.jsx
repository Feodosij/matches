import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
        <div className="row">
            {this.formatCount()}
        </div>
    );
  }
  formatCount = () => {
    const id = new Date();
    return (
      <img
        className="match_image"
        src={this.props.counter.src}
        alt={this.props.counter.id}
        key={id}
      />
    );
  };
}

export default Counter;
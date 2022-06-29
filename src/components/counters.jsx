import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    render() {
        const { onIncrement, counters } = this.props;
        return (
          <div>
            {counters.map((counter) => (
              <Counter
                onIncrement={onIncrement}
                counter={counter}
                key={counter.id}
              />
            ))}
            <div className="buttons">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
              >
                +1
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.counter)}
              >
                -1
              </button>
              <button
                onClick={() => this.props.onDoubleDecrement(this.props.counter)}
              >
                -2
              </button>
              <button
                onClick={() => this.props.onTripleDecrement(this.props.counter)}
              >
                -3
              </button>
            </div>
          </div>
        );
    }
}

export default Counters;
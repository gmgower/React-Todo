import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  // values line out
  handleChanges = event => {
    this.setState({ item: event.target.value });
    console.log(this.state.item);
  };

  // add task
  handleSubmit = event => {
    this.props.addItem(event, this.state.item);
    this.setState({ item: '' });
  };

  render() {
    console.log('rendering form');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

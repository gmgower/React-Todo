import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData // todoData: todoData
    };
  }

  addItem = (event, taskName) => {
    event.preventDefault();
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newTask]
    });
  };

  // https://youtu.be/EBRuYihwymM
  clearTask = event => {
    event.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    });
  };

  toggleItem = itemID => {
    console.log('App.js: App: toggleItem: ', itemID);

    this.setState({
      // toggle line out
      todoData: this.state.todoData.map(item => {
        if (item.id === itemID) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          todoData={this.state.todoData}
          toggleItem={this.toggleItem}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;

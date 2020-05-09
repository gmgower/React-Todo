// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo.js';

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todoData.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearTask}>Clear Todo</button>
    </div>
  );
};

export default TodoList;

import React from 'react';
import Todo from "./Todo"
// the first argument in functional component is props by default and doesn't have to be named props.
// will loop through the array and give us our list. 
const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map(item => <Todo key={item.id} {...item} todoClick={props.todoClick} />)}
    </ul>
  </div>
);

export default List; 
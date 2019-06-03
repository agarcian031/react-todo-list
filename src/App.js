import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); 

    // an array of todo items, class instances

    this.state = {
      todos: [
        {id: 1, name: "Learn Rails", complete: true, }, 
        {id: 2, name: "Learn React", complete: false, }, 
        {id: 3, name: "Graduate DPL", complete: false, }, 
      ]
    }; 
  }

  renderTodos() {
    return this.state.todos.map( todo => 
      <li key={todo.id}>{ todo.name }</li>
      )
  }; 


  render() {
    return (
      <div>
       <ul>
         {this.renderTodos()}
       </ul>
      </div>
    )
  }
}; 

export default App;

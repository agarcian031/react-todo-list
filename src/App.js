import React from 'react';
import './App.css';
import List from './List'; 
import TodoForm from './TodoForm'; 

class App extends React.Component {
  constructor(props) {
    super(props); 

    // an array of todo items, class instances

    this.state = {
      todos: [
        {id: 1, name: "Learn Rails", complete: true, }, 
        {id: 2, name: "Learn React", complete: false, }, 
        {id: 3, name: "Graduate DPL", complete: false, }, 
        // new item ... 
      ]
    }; 

    // so add item knows what this is. 
    this.addItem = this.addItem.bind(this)
  } 


  getUniqueId = () => {
     //NOTE We are just using this as a helper function for id's since we aren't using a db yet
   return Math.floor((1 + Math.random()) * 0x10000)
   .toString(16)
   .substring(1);
  }


  addItem(name) {
    // this.setState({ todos: ??? })
    const todo = { name, id: this.getUniqueId(), complete: false}; 
    this.setState({todos: [todo, ...this.state.todos], }); 
    // const {todos} = this.state; 
  }; 

  // if the id of this.id that we clicked on matches, then it will return a brand new object with the id, as is, with the name. But we are going to override the complete to be the opposite of what it was before we clicked the id. 

  handleClick = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id ) {
          return {
            ...todo, 
            complete: !todo.complete, 
          }
        }
        return todo; 
      })
    })
  }

// todoClick and handleClick are the same but the function and the prop name don't have to be name the same for the function to run. 
  render() {
    return (
      <div>
      <TodoForm addItem={this.addItem}/>
      <List name="Todo List" items={this.state.todos} todoClick={this.handleClick}/>
      </div>
    )
  }
}; 

export default App;

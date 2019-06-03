// in forms we need to store form inputs which will require a state.
import React from 'react'; 

class TodoForm extends React.Component {
  constructor(props) {
      super(props); 
      this.state = {name: "",}; 
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this); 
    
  }; 




  handleSubmit(event) {
    // prevent the form from refreshing after the button is clicked. 
    event.preventDefault(); 
    this.props.addItem(this.state.name); 
    this.setState({name: "", })
    
  }

  // before binding this represented 'e' and not the component
  handleChange(e) {
    this.setState({name: e.target.value }); 
  }
  
  
  
  
  // no parenthesis on handle submit because we only want it called with the form is submitted. 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input  
        required 
        placeholder="Add An Item" 
        value={this.state.name}
        name= "name"
        onChange={this.handleChange}/>
      </form>
    )
  }
}; 

export default TodoForm; 
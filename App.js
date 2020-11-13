
import './App.css';
import React from 'react';
import List from './List'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      items:[],
      currentItem:{
      text:'',
      key:''
    }
  }
  this.handleInput=this.handleInput.bind(this);
  this.addItem=this.addItem.bind(this);
}
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
      

    })
  }

  addItem(e){
    e.preventDefault();
    const newItem =this.state.currentItem;
    console.log(newItem);
    if(newItem.text!=="") {
      const newItems=[...this.state.items, newItems];
      this.setState({
        items:newItem,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
render() {
  return(
    <div className="App">
 
    <header>
     <form id="employeeForm" onSubmit={this.addItem}>
     <input type="text" placeholder="Enter Text"
     value={this.state.currentInput}
     onchange={this.handleInput} />
     <button type="submit">ADD</button>
     </form>
     </header>
     <List></List>
     </div>
     

  );
}

}  

export default App;

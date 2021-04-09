
import './App.css';
import React, { Component } from 'react';

import Overview from "./components/overview";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task:"",
      ourArr: [],
    }
   
    this.addItem = this.addItem.bind(this);
    this.onChangeInputField = this.onChangeInputField.bind(this);
    this.newList = this.newList.bind(this);
  }

  newList(e) {
        
    let filteredItems = this.state.ourArr.slice(0,e.target.dataset.remove).concat(this.state.ourArr.slice(e.target.dataset.remove + 1));
    this.setState({ourArr: filteredItems});
  }
  
 onChangeInputField(e){
  this.setState({
    task: e.target.value,
  });
 }

addItem(e){
    e.preventDefault();
    this.setState(
      {
        ourArr: [...this.state.ourArr,this.state.task],
        task: ""
      }
    )
}
  
  
 
render() {
    
    return (
      <div>
        <form action="" onSubmit={this.addItem}>
          <label htmlFor="textfield">Insert List</label>
        <input id="textfield" type="text" onChange={this.onChangeInputField} value={this.state.task}/>
        <button id="submitbtn" type="submit" >Add Item</button>
        </form>

         <Overview arr={this.state.ourArr} list={this.newList}/>
      </div>
    );
  }
}

export default App;


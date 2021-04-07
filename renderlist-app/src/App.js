import logo from './logo.svg';
import './App.css';
import Overview from "./components/overview";

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task:"",
      ourArr: []
    }

    this.addItem = this.addItem.bind(this);
    this.onChangeInputField = this.onChangeInputField.bind(this);
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

         <Overview ourArr={this.state.ourArr}/>
      </div>
    );
  }
}

export default App;


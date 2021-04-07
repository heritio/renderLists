import logo from './logo.svg';
import './App.css';
import Overview from "./components/overview";

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourArr: []
    }

    this.addItem = this.addItem.bind(this);
  }
  
  addItem(){
    let fieldText = document.getElementById("textfield");
    if(fieldText.value.length <= 0){
      return;
    }
    this.setState(
      {
        ourArr: [...this.state.ourArr,fieldText.value],
      }
    )
  }
  
  render() {
    return (
      <div>
        <input id="textfield" type="text"/>
        <button id="submitbtn" onClick={this.addItem}>Add Item</button>
         <Overview ourArr={this.state.ourArr}/>
      </div>
    );
  }
}

export default App;


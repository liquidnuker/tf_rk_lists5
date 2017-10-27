// import React from "react";
// import ReactDOM from "react-dom";

import {data1} from "./store.js";
import ListComponent from "./ListComponent.jsx";

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1
    };

    // binders
    this.addItem = this.addItem.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }

  // lifecycle hooks
    
  // methods
  addItem() {
    data1.push(document.getElementById("input1").value);
    this.updateItems();
  }

  updateItems() {
    this.setState(prevState => ({
      data: data1
    }));
  }

  render() {
    return (
      <div>
      <ListComponent dataSrc={this.state.data} />
      <input type="text" id="input1" name="" placeholder="add new item" />
      <button onClick={this.addItem}>add item</button>
      </div>
    );
  }
}
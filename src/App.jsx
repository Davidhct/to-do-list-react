import React, { Component } from "react";
import { TodoInput } from "./components/TodoInput/TodoInput.component";
import { Item } from "./components/Item/Item.component";
import "./App.css";
/////////////////////////
class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      todos: [],
    };
  }
  onChangeInput = (event) => {
    this.setState({ userInput: event.target.value });
  };
  onClickInput = () => {
    let todosArr = this.state.todos;
    const inputVal = this.state.userInput.trim();
    if (inputVal === "") alert("You did not write anything!");
    else {
      todosArr.push({ check: false, value: this.state.userInput });
      this.setState({ todos: todosArr });
    }
    this.setState({ userInput: "" });
  };

  onCheckHandle = (event) => {
    const prevState = this.state.todos;
    const updateState = prevState.map((item, index) => {
      if (index === Number(event.target.id)) {
        return {
          ...item,
          check: !item.check,
        };
      }
      return item;
    });

    this.setState({ todos: updateState });
  };

  render() {
    const items = this.state.todos.map((item, index) => (
      <Item
        key={index}
        id={index}
        todo={item}
        onCheckHandle={this.onCheckHandle}
      />
    ));

    return (
      <div className="App">
        <h1>TodoInput</h1>
        <div className="input-wrapper">
          <TodoInput
            userIn={this.state.userInput}
            onChangeInput={this.onChangeInput}
            onClickInput={this.onClickInput}
          />
        </div>
        <div>
          <h1>TodoList</h1>
        </div>
        <div className="list-wrapper">{items}</div>
      </div>
    );
  }
}

export default App;

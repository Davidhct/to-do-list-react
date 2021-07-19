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
    todosArr.push({ check: false, value: this.state.userInput });
    this.setState({ todos: todosArr });
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
    console.log(this.state.todos);
    return (
      <div className="App">
        <TodoInput
          onChangeInput={this.onChangeInput}
          onClickInput={this.onClickInput}
        />
        {items}
      </div>
    );
  }
}

export default App;

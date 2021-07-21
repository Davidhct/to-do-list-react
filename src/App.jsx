import React, { Component } from "react";
import { TodoInput } from "./components/TodoInput/TodoInput.component";
import { Item } from "./components/Item/Item.component";
import edittingIcon from "./components/Item/icons/editting_icon.png";
import editIcon from "./components/Item/icons/edit_icon.png";
import "./App.css";

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
    const todosArr = this.state.todos;
    const inputVal = this.state.userInput.trim();
    if (inputVal === "") alert("You did not write anything!");
    else {
      todosArr.push({ check: false, value: this.state.userInput, edit: true });
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

  onChangeEdit = (event) => {
    const prevState = this.state.todos;
    const updateState = prevState.map((item, index) => {
      if (`input-item-${index}` === event.target.id) {
        if (item.edit === false) {
          return {
            ...item,
            value: event.target.value,
          };
        }
      }
      return item;
    });
    this.setState({ todos: updateState });
  };

  onClickEdit = (event) => {
    const prevState = this.state.todos;
    const updateState = prevState.map((item, index) => {
      if (`edit-item-${index}` === event.target.id) {
        if (item.edit) event.target.src = edittingIcon;
        else event.target.src = editIcon;

        return {
          ...item,
          edit: !item.edit,
        };
      }
      return item;
    });
    this.setState({ todos: updateState });
  };

  // onClickDelete = (event) => {
  //   const prevState = this.state.todos;
  //   const updateState = prevState.map((item, index) => {
  //     if (`delete-item-${index}` === event.target.id) {
  //       prevState.splice(index, 1);
  //       return prevState;
  //     }
  //     return item;
  //   });
  //   this.setState({ todos: updateState });
  // };

  render() {
    const items = this.state.todos.map((item, index) => (
      <Item
        key={index}
        id={index}
        todo={item}
        onCheckHandle={this.onCheckHandle}
        onChangeItem={this.onChangeEdit}
        onClickEdit={this.onClickEdit}
        onClickDelete={this.onClickDelete}
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
        <div>{this.state.todos.length > 0 ? <h1>TodoList</h1> : null}</div>
        <div className="list-wrapper">{items}</div>
      </div>
    );
  }
}

export default App;

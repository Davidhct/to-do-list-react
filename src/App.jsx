import React, { Component } from "react";
import { TodoInput } from "./components/TodoInput/TodoInput.component";
import { Item } from "./components/Item/Item.component";
import { ClearList } from "./components/ClearList/ClearList.component";
import edittingIcon from "./components/Item/icons/editting_icon.png";
import editIcon from "./components/Item/icons/edit_icon.png";
import swal from "sweetalert";

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
    if (inputVal === "") swal("You did not write anything!");
    else {
      todosArr.push({ check: false, value: this.state.userInput, edit: true });
      this.setState({ todos: todosArr });
    }
    this.setState({ userInput: "" });
  };

  onCheckHandle = (event) => {
    this.setState((prevState) => {
      const updateState = prevState.todos.map((item, index) => {
        if (`${index}` === event.target.id) {
          return {
            ...item,
            check: !item.check,
          };
        }
        return item;
      });

      return { todos: updateState };
    });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") this.onClickInput();
  };

  onChangeEdit = (event) => {
    this.setState((prevState) => {
      const updateState = prevState.todos.map((item, index) => {
        if (`${index}` === event.target.id) {
          if (item.edit === false) {
            return {
              ...item,
              value: event.target.value,
            };
          }
        }
        return item;
      });
      return { todos: updateState };
    });
  };

  onClickEdit = (event) => {
    this.setState((prevState) => {
      const updateState = prevState.todos.map((item, index) => {
        if (`${index}` === event.target.id) {
          event.target.src = item.edit === true ? edittingIcon : editIcon;
          return {
            ...item,
            edit: !item.edit,
          };
        }
        return item;
      });
      return { todos: updateState };
    });
  };

  onClickDelete = (index) => {
    this.setState((prevState) => {
      let updateState = [...prevState.todos];
      updateState.splice(index, 1);

      return { todos: updateState };
    });
  };

  onClickClearAll = () => {
    this.setState(() => {
      const updateState = [];
      return { todos: updateState };
    });
  };
  onClickClearChecked = () => {
    this.setState((prevState) => {
      const update = prevState.todos;
      prevState.todos.forEach((item, index) => {
        if (item.check) update.splice(index, 1);
      });
      return { todos: update };
    });
  };

  render() {
    const items = this.state.todos.map((item, index) => (
      <Item
        key={index}
        id={index}
        todo={item}
        onCheckHandle={this.onCheckHandle}
        onChangeItem={this.onChangeEdit}
        onClickEdit={this.onClickEdit}
        onClickDelete={() => this.onClickDelete(index)}
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
            handleKeyDown={this.handleKeyDown}
          />
        </div>
        <div>{this.state.todos.length > 0 ? <h1>TodoList</h1> : null}</div>
        <div className="list-wrapper">{items}</div>
        <div>
          {this.state.todos.length > 0 && (
            <ClearList
              onClickClearAll={this.onClickClearAll}
              onClickClearChecked={this.onClickClearChecked}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

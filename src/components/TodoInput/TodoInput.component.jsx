import React from "react";
import "./TodoInput.styles.css";

export const TodoInput = ({
  userIn,
  handleKeyDown,
  onChangeInput,
  onClickInput,
}) => (
  <div className="input-div">
    <input
      type="text"
      placeholder="Enter todos"
      onChange={onChangeInput}
      className="input"
      value={userIn}
      onKeyDown={handleKeyDown}
    />
    <button type="button" onClick={onClickInput} className="input-button">
      +
    </button>
  </div>
);

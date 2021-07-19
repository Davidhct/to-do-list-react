import React from "react";
import "./TodoInput.styles.css";

export const TodoInput = ({ userIn, onChangeInput, onClickInput }) => (
  <div className="input-div">
    <input
      type="text"
      placeholder="Enter todos"
      onChange={onChangeInput}
      className="input"
      value={userIn}
    />
    <button type="button" onClick={onClickInput} className="input-button">
      +
    </button>
  </div>
);

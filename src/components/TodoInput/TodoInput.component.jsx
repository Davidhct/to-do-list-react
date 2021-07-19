import React from "react";
import "./TodoInput.styles.css";

export const TodoInput = ({ onChangeInput, onClickInput }) => (
  <div className="input-div">
    <input
      type="text"
      placeholder="Ender todos"
      onChange={onChangeInput}
      className="input"
    />
    <button type="button" onClick={onClickInput} className="input-button">
      +
    </button>
  </div>
);

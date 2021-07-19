import React from "react";
import "./Item.styles.css";

export const Item = (props) => {
  return (
    <div className="item-div">
      <input
        type="checkbox"
        className="checkbox"
        id={props.id}
        checked={props.todo.check}
        onChange={props.onCheckHandle}
      />
      <p className="item">{props.todo.value}</p>
    </div>
  );
};

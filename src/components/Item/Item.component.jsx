import React from "react";
import "./Item.styles.css";
import editIcon from "./icons/edit_icon.png";
import deleteIcon from "./icons/delete_icon.png";

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
      <input
        type="text"
        className={props.todo.check ? "noItem" : "item"}
        // id={`input-item-${props.id}`}
        id={props.id}
        value={props.todo.value}
        onChange={props.onChangeItem}
        disabled={props.todo.edit}
      />
      <img
        src={editIcon}
        alt="edit button"
        className="edit"
        // id={`edit-item-${props.id}`}
        id={props.id}
        onClick={props.onClickEdit}
      />
      <img
        src={deleteIcon}
        alt="delete button"
        className="delete"
        // id={`delete-item-${props.id}`}
        id={props.id}
        onClick={props.onClickDelete}
      />
    </div>
  );
};

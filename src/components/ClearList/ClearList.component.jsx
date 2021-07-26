import React from "react";
import "./ClearList.styles.css";
export const ClearList = (props) => {
  return (
    <div className="clear-btn">
      <button
        type="button"
        onClick={props.onClickClearAll}
        className="clear-all"
      >
        Clear all tasks
      </button>
      <button
        type="button"
        onClick={props.onClickClearChecked}
        className="clear-checked"
      >
        Clear checked tasks
      </button>
    </div>
  );
};

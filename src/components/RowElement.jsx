import React from "react";

function RowElement({ title, count, onAddClick, onRemoveClick }) {
  return (
    <tr>
      <td>
        <div>{title}</div>
      </td>
      <td>
        <div>{count}</div>
      </td>
      <td className="Add_button">
        <div onClick={() => onAddClick()}>Add</div>
      </td>
      <td className="Remove__button">
        <div onClick={() => onRemoveClick()}>Remove</div>
      </td>
    </tr>
  );
}

export default RowElement;

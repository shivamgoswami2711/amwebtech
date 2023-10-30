import React from "react";
import "./style/material.css";
import useStateValue from "../store/store";
import RowElement from "../components/RowElement";

function Material() {
  const [data, dispatch] = useStateValue();

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>Raw material (RM)</th>
            <th>Count</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowElement
            title={"RM-1"}
            count={data.material.RM1}
            onAddClick={() => dispatch({type:"Add_RM1"})}
            onRemoveClick={() => dispatch({ type: "Remove_RM1" })}
          />
          <RowElement
            title={"RM-2"}
            count={data.material.RM2}
            onAddClick={() => dispatch({type:"Add_RM2"})}
            onRemoveClick={() => dispatch({ type: "Remove_RM2" })}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Material;

import React, { useEffect } from "react";
import "./style/material.css";
import useStateValue from "../store/store";
import RowElement from "../components/RowElement";

function Product() {
  const [data, dispatch] = useStateValue();
  useEffect(() => {
    const time = setTimeout(() => dispatch({ type: "clear_massage" }), 3000);
    return () => {
      clearTimeout(time);
    };
  }, [data.massage]);

  return (
    <div className="table_container">
      {data.massage.length > 0 && <div className="magBox">{data.massage}</div>}
      <table>
        <thead>
          <tr>
            <th>Finish Product</th>
            <th>Count</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowElement
            title={"FP-1"}
            count={data.product.FP1}
            onAddClick={() => dispatch({ type: "Add_FP1" })}
            onRemoveClick={() => dispatch({ type: "Remove_FP1" })}
          />
          <RowElement
            title={"FP-2"}
            count={data.product.FP2}
            onAddClick={() => dispatch({ type: "Add_FP2" })}
            onRemoveClick={() => dispatch({ type: "Remove_FP2" })}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Product;

import React from "react";
import "./style/home.css";
import useStateValue from "../store/store";

function Home() {
  const [data] = useStateValue();

  const BoxContainer = ({ title, count }) => {
    return (
      <div className="product__box">
        <h2>{title}</h2>
        <p className="Count">{count}</p>
      </div>
    );
  };

  return (
    <div className="dashboard__Container">
      <div>
        <div>
          <div className="material__container">
            <h1>Material</h1>
            <div>
              <BoxContainer title={"RM-1"} count={data.material.RM1} />
              <BoxContainer title={"RM-2"} count={data.material.RM2} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="product__container">
            <h1>Product</h1>
            <div>
              <BoxContainer title={"FP-1"} count={data.product.FP1} />
              <BoxContainer title={"FP-2"} count={data.product.FP2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

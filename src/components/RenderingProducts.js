import React from "react";
import Product from "./RenderingProduct";
import "../App.css";

const RenderingProducts = () => {
  return (
    <div className="PP">
      <div>
        <Product pid="1" />
      </div>
      <div>
        <Product pid="2" />
      </div>
      <div>
        <Product pid="3" />
      </div>
    </div>
  );
};

export default RenderingProducts;

import React from "react";
import Product from "./RenderingProduct";
import "../App.css";

const RenderingProducts = () => {
  return (
    <div className="PP">
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default RenderingProducts;

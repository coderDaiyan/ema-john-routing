import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/product";

const ProductDetail = () => {
  const { productKey } = useParams();

  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);

  return (
    <div>
      <h1>Product Detail Coming soon</h1>
      <h2>Product ID: {productKey}</h2>
      <Product showAddToCartBtn={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;

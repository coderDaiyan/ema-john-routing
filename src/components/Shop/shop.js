import React, { useState } from "react";
import "./shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/product";
import Cart from "../Cart/cart";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    // console.log("Product added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <h4>Items Ordered: {cart.length}</h4> */}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

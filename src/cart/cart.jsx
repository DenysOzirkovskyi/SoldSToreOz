import React, { useState, useRef, useEffect } from "react";
import { ProductTemplateCart } from "../ProductTemplateCart";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import s from "./cart.module.css";
const Cart = (props) => {
  const cartBoxRef = useRef(null);
  const [total, setTotal] = useState(0);
  const [totalStyle, setTotalStyle] = useState(0);
  const [count, setCount] = useState(0);
  const [buttonShop, setButtonShop] = useState(0);
  const [empty, setEmpty] = useState(s.emptyCartDiv);
  const [emptyText, setEmptyText] = useState(0);
  let cartItems = JSON.parse(localStorage.getItem("newCartItems")) || [];
  useEffect(() => {
    // Перераховуємо суму кожен раз, коли змінюється список товарів
    let sum = 0;
    let counter = 0;
    cartItems.forEach((item) => ((sum += item.price), (counter += 1)));
    setTotal(sum);

    if (counter == 0) {
      setEmpty(s.emptyCartDiv);
      setTotalStyle(s.vanish);

      setButtonShop(s.shoppingButton);
      setEmptyText("The cart is empty...");
    } else if (counter != 0) {
      setEmpty(s.notEmptyCartDiv);
      setEmptyText(" ");
      setTotalStyle(s.appear);
      setButtonShop(s.vanish);
    }
    setCount(counter);
  }, [cartItems]);

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter((p) => p.id !== item.id);
    localStorage.setItem("newCartItems", JSON.stringify(updatedCartItems));
    setTotal(updatedCartItems.reduce((acc, p) => acc + p.price, 0));
    const childToRemove = cartBoxRef.current.querySelector(`[id="${item.id}"]`);
    if (childToRemove) {
      cartBoxRef.current.removeChild(childToRemove);
    }
  };

  function showCartItems() {
    return cartItems.map((p) => (
      <ProductTemplateCart
        id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
        handleRemoveItem={() => handleRemoveItem(p)}
      />
    ));
  }

  function showButtons() {
    return cartItems.map((p) => (
      <button className={s.mapButton} onClick={() => handleRemoveItem(p)}>
        Remove
      </button>
    ));
  }

  return (
    <>
      <Header
        FirstPage="home"
        FirstPath="home"
        SecondPage="men"
        ThirdPage="women"
        ForthPage="kids"
      />
      <div className={s.pushFooter}>
        <div className={s.cartTextDiv}>
          {" "}
          <h1>Cart</h1>
        </div>
        <div className={s.totalDiv}>
          {" "}
          <h1 className={totalStyle}>
            Total ({count}): {total} $
          </h1>{" "}
        </div>
        <div className={s.alignerEmpty}>
          <div className={empty}>
            {" "}
            {emptyText}
            <div className={buttonShop}>
              <NavLink to = '/'>
                <button>Start shopping</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div ref={cartBoxRef} className={s.cartProductsDiv}>
          <div id={s.productBox}>{showCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { addLikedItem, getLikedItems } from "./state/state";
import blackHeart from "./images/svj/likedItemHeart.svg";
import whiteHeart from "./images/svj/whiteHeart.svg";
export const ProductTemplate = (props) => {
  const initialHeartState = getLikedItems().some((item) => item.id === props.id)
    ? blackHeart
    : whiteHeart;
  const [heart, setHeart] = useState(initialHeartState);
  function handleLikedButton(id) {
    addLikedItem(id);
    setHeart(blackHeart);
  }
  console.log(getLikedItems()); // перевірка, чи дійсно є вподобані товари в localStorage
  console.log(props.id); // перевірка, чи дійсно передається id компоненту ProductTemplate
  console.log(getLikedItems().includes(props.id));
  let productPath = "/" + props.id;
  let price = props.Price + "$";
  return (
    <div className={s.imageFrame}>
      <div className={s.likeProduct + " " + "liked"}>
        <button onClick={() => handleLikedButton(props.id)}>
          <img className={s.blackHeart} src={heart} ></img>
        </button>
      </div>
      <NavLink to={productPath}>
        <img src={props.ImgLink} alt="nike" className={s.clothes} />
      </NavLink>
      <div className={s.NamePrice}>
        <p className={s.caption}>{props.ProductName}</p>
        <p className={s.price}>{price}</p>
      </div>
    </div>
  );
};

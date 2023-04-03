import React from "react";
import FilterSort from "./FilterSort/FilterSort.jsx";
import Header from "../../../Header/Header.jsx";
import Products from "./Products/Products.jsx";
const MenPage = (props) => {
  return (
    <>
      <Header Page="HOME" Link="" />
      <FilterSort />
      <Products productData={props.productData} />
    </>
  );
};

export default MenPage;
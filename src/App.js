import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./Header/Header";
import ProductSlider from "./SliderTest/SliderTest"
import "./PagesFolder/ProductPage/productPage.css";
import "./PagesFolder/MenPage/Components/FilterSort/FilterSort.css";
import FullMainPage from "./PagesFolder/MainPage/FullMainPage";
import MenPage from "./PagesFolder/MenPage/Components/MenPage";
import ProductPage from "./PagesFolder/ProductPage/productPage";
import ProfilePage from "./PagesFolder/ProfilePage/Profile";
import Footer from "./Footer/Footer";
import Cart from "../src/cart/cart";
import LikedPage from "./PagesFolder/LikedPage/LikedPage"
import Header from "./Header/Header";
import Products from "./PagesFolder/MenPage/Components/Products/Products";
import Slider from "react-slick";
function App(props) {
  debugger
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path=""
          element={
            <Header FirstPage="men" SecondPage="women" ThirdPage="kids" />
          }
        />
        <Route
          exact
          path="/women"
          element={
            <Header FirstPage="home" SecondPage="men" ThirdPage="kids" />
          }
        />
        {/* <Route
          path="/kids"
          element={
            <Header FirstPage="home" SecondPage="men" ThirdPage="women" />
          }
        /> */}
         <Route
          path="/kids"
          element={
            <ProductSlider/>
          }
        />
        <Route
          path="/profile"
          element={
            <Header
              FirstPage="home"
              SecondPage="men"
              ThirdPage="women"
              ForthPage="kids"
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/" element={<FullMainPage />} />

        <Route path="/men" element={<MenPage />}>
          <Route
            exact
            path="/men"
            element={<Products productData={props.Data.productData}   addLikedItem={props.addLikedItem}/>}
          ></Route>
        </Route>

        {props.Data.productData.map((productItem) => (
          <Route
            exact
            path={`/${productItem.id}`}
            element={<ProductPage  idProduct = {productItem.id} addCartItem={props.addCartItem}   addLikedItem={props.addLikedItem} nameProduct = {productItem.name} priceProduct = {productItem.price} imagesProduct = {productItem.allImages}/>}
          />
        ))}

        <Route
          exact
          path="/cart"
          element={<Cart  />}
        />
         <Route
          exact
          path="/liked"
          element={<LikedPage />}
        />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import kid from "../../../images/People/kid.png";
import women from "../../../images/People/women.png";
import men from "../../../images/People/men.png";
import styles from "./Content.module.css";
import { NavLink } from "react-router-dom";

import NewNikeCollection from "../../../images/shoes/newNikeCollection.jpg";
import { MobileProducts } from "../../../MobileProductTemplate";
import Nike from "../../../images/shoes/dunkBlack.jpg";

const PeopleImgs = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.searchMobileDiv}>
          <input
            className={styles.searchMobile}
            type="text"
            placeholder="All products"
          ></input>
          <div className={styles.searchMobileIcon}>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div className={styles.someContentMobile}>
          <div className={styles.imageTitle}>
            {" "}
            <img src={NewNikeCollection} alt="women"></img>
          </div>
          <div className={styles.textTitle}>
            {" "}
            <h3>
              NEW <br /> COLLECTIONS <br />
              AVAILABLE{" "}
            </h3>
          </div>
        </div>
        <div className={styles.newProductsDiv + " " + styles.pushFooter}>
          {" "}
          <MobileProducts Price="100" ProductName="nike" ImgLink={Nike} />
          <MobileProducts Price="100" ProductName="nike" ImgLink={Nike} />
          <MobileProducts Price="100" ProductName="nike" ImgLink={Nike} />
          <MobileProducts Price="100" ProductName="nike" ImgLink={Nike} />
          <MobileProducts Price="100" ProductName="nike" ImgLink={Nike} />
          <MobileProducts Price="100" ProductName="nike" ImgLink={Nike} />
        </div>
        <div className={styles.seeMoreDiv}>
          {" "}
          <button className={styles.seeAllBtn}>See all products</button>
        </div>
        <div className={styles.flexBoxPeople}>
          <div>
            <div className={styles.hoverImgMain}>
              <NavLink to="/men">
                <img className={styles.photo_size} src={men} alt="men"></img>
              </NavLink>
            </div>
          </div>
          <div>
            <div className={styles.hoverImgMain}>
              <NavLink to="/women">
                <img
                  className={styles.photo_size}
                  src={women}
                  alt="women"
                ></img>
              </NavLink>
            </div>
          </div>
          <div>
            <div className={styles.hoverImgMain}>
              <NavLink to="/children">
                <img className={styles.photo_size} src={kid} alt="kid"></img>
              </NavLink>
            </div>
          </div>
          
        </div>
        <div className={styles.captionsDiv}>
            <div>   <NavLink to="/men">For men </NavLink></div>
            <div> <NavLink to="/women">For women </NavLink></div>
            <div> <NavLink to="/kids">For kids </NavLink></div>
          </div>
      </div>
    </div>
  );
};
//  <p id={styles.caption3}>For children</p>
export default PeopleImgs;

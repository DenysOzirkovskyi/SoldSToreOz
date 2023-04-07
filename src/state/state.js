import GreenNike from "../images/shoes/greenNike.jpg";
import BlackAdidas from "../images/shoes/blackAdidas.jpg";
import AirForce1White from "../images/shoes/airForce1White.jpg";
import JordanGrey from "../images/shoes/jordanGrey.jpg";
import DunkYellow from "../images/shoes/dunkYellow.jpg";
import NikeBones from "../images/shoes/nikeBones.jpg";
import JordanBlack from "../images/shoes/dunkBlack.jpg";
import DunkGreenGlow from "../images/shoes/dunkGreenGlow.jpg";
import BlazerWhite from "../images/shoes/blazerWhite.jpg";
import BlackNikeHoodie from "../images/Clothes/blackNikeHoodie.jpg";

let state = {
  productData: [
    {
      id: 1,
      name: "Nike Green",
      price: 1500,
      imgMain: GreenNike,
      type: "shoes",
      liked: false,
    },
    {
      id: 2,
      name: "Adidas Black",
      price: 500,
      imgMain: BlackAdidas,
      type: "shoes",
      liked: false,
    },
    {
      id: 3,
      name: "Air Force 1 White",
      price: 200,
      imgMain: AirForce1White,
      type: "shoes",
      liked: false,
    },
    {
      id: 4,
      name: "Jordan Grey",
      price: 300,
      imgMain: JordanGrey,
      type: "shoes",
      liked: false,
    },
    {
      id: 5,
      name: "Dunk Yellow",
      price: 300,
      imgMain: DunkYellow,
      type: "shoes",
      liked: false,
    },
    {
      id: 6,
      name: "Nike Bones",
      price: 400,
      imgMain: NikeBones,
      type: "shoes",
      liked: false,
    },
    {
      id: 7,
      name: "Dunk Black",
      price: 300,
      imgMain: JordanBlack,
      type: "shoes",
      liked: false,
    },
    {
      id: 8,
      name: "Dunk Green Glow",
      price: 1,
      imgMain: DunkGreenGlow,
      type: "shoes",
      liked: false,
    },
    {
      id: 9,
      name: "Blazer White",
      price: 250,
      imgMain: BlazerWhite,
      type: "shoes",
      liked: false,
    },
    {
      id: 10,
      name: "Black Nike Hoodie",
      price: 74.5,
      imgMain: BlackNikeHoodie,
      type: "clothes",
      liked: false,
    },
    {
      id: 11,
      name: "Black Nike Hoodie1",
      price: 75,
      imgMain: BlackNikeHoodie,
      type: "clothes",
      liked: false,
    },
    {
      id: 12,
      name: "Black Nike Hoodie2",
      price: 74,
      imgMain: BlackNikeHoodie,
      type: "clothes",
      liked: false,
    },
  ],
};

export default state;

import React from "react";

import Card from "../UI/Card";
import { useStore } from "../../hooks-store/store";
import "./ProductItem.css";
import p1 from "./I/p1.png";
import p2 from "./I/p2.png";
import p3 from "./I/p3.png";
import p4 from "./I/p4.png";
import p5 from "./I/p5.png";
import p6 from "./I/p6.png";

const ProductItem = React.memo((props) => {
  console.log("RENDERING");
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  // let imgs = `./I/${props.id}.png`;

  let imgs;
  if (props.id === p1.toString().substring(16, 14)) imgs = p1;
  if (props.id === p2.toString().substring(16, 14)) imgs = p2;
  if (props.id === p3.toString().substring(16, 14)) imgs = p3;
  if (props.id === p4.toString().substring(16, 14)) imgs = p4;
  if (props.id === p5.toString().substring(16, 14)) imgs = p5;
  if (props.id === p6.toString().substring(16, 14)) imgs = p6;

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <img
        className="product-item-img"
        src={imgs}
        alt="Flowers in Chania"
      ></img>

      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;

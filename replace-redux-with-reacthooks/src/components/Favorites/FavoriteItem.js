import React from "react";

import Card from "../UI/Card";
import "./FavoriteItem.css";
import p1 from "./I/p1.png";
import p2 from "./I/p2.png";
import p3 from "./I/p3.png";
import p4 from "./I/p4.png";
import p5 from "./I/p5.png";
import p6 from "./I/p6.png";

const FavoriteItem = (props) => {
  let imgs = p2;
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
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;

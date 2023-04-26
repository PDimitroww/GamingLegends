import { useState, useEffect } from "react";
import img from "../assets/Slice1.png";

export const GameBox = () => {
  const [state, setState] = useState(0);

  return (
    <div className="container">
      <button className="btn viewAll__Btn">View all</button>
      <div className="items__grid">
        <div className="item" data-after="-99%">
          <img className="item_img" src={img} alt="" />
          <div className="item_info">
            <p classNAme="item_name">Apex</p>
            <p classNAme="item_price">24.99$</p>
          </div>
        </div>
        <div className="item" data-after="-99%">
          <img className="item_img" src={img} alt="" />
          <div className="item_info">
            <p classNAme="item_name">Apex</p>
            <p classNAme="item_price">24.99$</p>
          </div>
        </div>
        <div className="item" data-after="-99%">
          <img className="item_img" src={img} alt="" />
          <div className="item_info">
            <p classNAme="item_name">Apex</p>
            <p classNAme="item_price">24.99$</p>
          </div>
        </div>
        <div className="item" data-after="-99%">
          <img className="item_img" src={img} alt="" />
          <div className="item_info">
            <p classNAme="item_name">Apex</p>
            <p classNAme="item_price">24.99$</p>
          </div>
        </div>
        <div className="item" data-after="-99%">
          <img className="item_img" src={img} alt="" />
          <div className="item_info">
            <p classNAme="item_name">Apex</p>
            <p classNAme="item_price">24.99$</p>
          </div>
        </div>
        <div className="item" data-after="-99%">
          <img className="item_img" src={img} alt="" />
          <div className="item_info">
            <p classNAme="item_name">Apex</p>
            <p classNAme="item_price">24.99$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

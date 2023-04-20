import { useState, useEffect } from "react";

export const GameBox = () => {
  const [state, setState] = useState(0);

  return (
    <div className="container">
      <button className="btn viewAll__Btn">View all</button>
      <div className="items__grid--Container">
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
        <button className="btn viewAll__Btn">View all</button>
      </div>
    </div>
  );
};

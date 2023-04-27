import { Link } from "react-router-dom";

export const GameBox = ({ game }) => {
  let min = 40;
  let max = 150;

  let disMin = 20;
  let disMax = 80;

  let price = (Math.random() * (max - min) + min).toFixed(2);
  let discount = Math.floor(Math.random() * (disMax - disMin) + disMin);
  let discountPrice = (price * (1 - discount / 100)).toFixed(2);

  let string = `-${discount}%`;

  return (
    <div className="item" data-after={string}>
      <Link preventScrollReset={true} to={`/game/${game.id}`}>
        <img className="item_img" src={game.thumbnail} alt="" />
      </Link>
      <div className="item_info">
        <p className="item_name">{game.title}</p>
        <p className="item_price">{discountPrice}$</p>
      </div>
    </div>
  );
};

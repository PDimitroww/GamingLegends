import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// router
import { useParams } from "react-router-dom";

export const GamePage = () => {
  const key = import.meta.env.VITE_API_KEY;
  const { gameId } = useParams();
  let navigate = useNavigate();

  const [game, setGame] = useState([]);

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
        params: { id: gameId },
        headers: {
          "X-RapidAPI-Key":
            "d3ea0873cbmsh8be6c21eb3df58ep147bb2jsn586f9dc2dd75",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          setGame(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    handleGameList();
  }, [gameId]);

  return (
    <div className="container game-page">
      <button className="btn game-page_btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <img src={game.thumbnail} alt="" />
      <h2>{game.title}</h2>
      <p>{game.description}</p>
    </div>
  );
};

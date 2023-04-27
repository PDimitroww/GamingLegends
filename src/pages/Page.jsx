import { useState, useEffect } from "react";
import axios from "axios";

// components
import { GameBox } from "../components/GameBox";
const key = import.meta.env.VITE_API_KEY;

export const Page = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          setGames(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    handleGameList();
  }, []);

  return (
    <div>
      <div className="container">
        <button className="btn viewAll__Btn">View all</button>
        <div className="items__grid">
          {games.map((game, index) => {
            console.log(game);
            return <GameBox key={index} game={game} />;
          })}
        </div>
      </div>
    </div>
  );
};

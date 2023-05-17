import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GameBox } from "../components/GameBox";

export const AllGames = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/page");
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "X-RapidAPI-Key":
            "d3ea0873cbmsh8be6c21eb3df58ep147bb2jsn586f9dc2dd75",
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
    <>
      <section className="container" id={AllGames}>
        <button onClick={navigateBack} className="btn viewAll__Btn">
          Go Back
        </button>
        <h2 className="h2-all">All Games</h2>
        <div className="items__grid">
          {games.map((game, index) => {
            return <GameBox key={index} game={game} />;
          })}
        </div>
      </section>
    </>
  );
};

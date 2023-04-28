import { useState, useEffect, useMemo } from "react";
import Pagination from "../components/pagination/Pagination";
import axios from "axios";

// components
import { GameBox } from "../components/GameBox";
const key = import.meta.env.VITE_API_KEY;
const pageSize = 6;

export const Page = () => {
  const [games, setGames] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const gamesInfo = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return games.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
    <>
      <div className="container">
        <button className="btn viewAll__Btn">View all</button>
        <div className="items__grid">
          {gamesInfo.map((game, index) => {
            return <GameBox key={index} game={game} />;
          })}
        </div>

        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={games.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

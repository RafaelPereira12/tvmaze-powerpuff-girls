"use client";

import Link from "next/link";
import Episode from "../container/episodes/Episode";
import { useGlobalContext } from "../context/GlobalContext";
import { AddToFavoriteProps } from "../common/add-to-favorites-button/AddToFavoritesTypes";

const FavoritesTable = () => {
  const {favorites} = useGlobalContext();
 
  if (favorites.length === 0) return <h5>Add episodes to your favorites list</h5>;
  return (
    <section className="flow-col bg-gray-100 w-[100%] md:w-[80%] p-6 rounded-[5px] [&_article]:justify-center items-end">
      {favorites.map((episode: AddToFavoriteProps) => {
        return (
          <section className=" mb-2 hover:bg-gray-300" key={episode.id}>
            <Link
              href={`/episode-details/${episode.season}/${episode.number}`}
              key={episode.id}
              aria-label={`Episode ${episode.number} ${episode.name}`}
            >
              <Episode
                key={episode.id}
                image={episode.image}
                name={episode.name}
                number={episode.number}
              />
            </Link>
          </section>
        );
      })}
    </section>
  );
};

export default FavoritesTable;

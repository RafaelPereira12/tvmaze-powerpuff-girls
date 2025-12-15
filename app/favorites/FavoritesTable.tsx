"use client";

import { SeasonEpisodeProps } from "../container/seasons/SeasonsTypes";
import Link from "next/link";
import Episode from "../container/episodes/Episode";
import { getFavorites } from "./FavoritesServerFunctions";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@atlaskit/spinner";

const FavoritesTable = () => {
  const { isPending, error, data } = useQuery({
      queryKey: ["favorites"],
      queryFn: () => getFavorites(),
    });

  if (isPending)
    return <Spinner testId="spinner" interactionName="load" label="Loading" />;

  if (error) return "An error has occurred: " + error.message;

  if(data.length === 0) return <h5>Add episodes to your favorites list</h5>
  return (
    <section className="flow-col bg-gray-100 w-[100%] md:w-[80%] p-6 rounded-[5px] [&_article]:justify-center items-end">
      {data.map((episode: SeasonEpisodeProps) => {
        return (
          <section className=" mb-2 hover:bg-gray-300" key={episode.id}>
            <Link
              href={`/episode-details/${episode.season}/${episode.number}`}
              key={episode.id}
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

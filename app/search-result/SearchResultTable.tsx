"use client";

import { getEpisodes } from "../utils/SeasonsUtils";
import { SearchResultProps } from "./SearchResultTypes";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@atlaskit/spinner";
import { SeasonEpisodeProps } from "../container/seasons/SeasonsTypes";
import Episode from "../container/episodes/Episode";
import Link from "next/link";

const SearchResultTable = ({ seasonNumber }: SearchResultProps) => {
  const matchSeasonId = 7072; //Try to find a better way to match the show real Id
  const { isPending, error, data } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => getEpisodes(seasonNumber + matchSeasonId),
  });
  if (isPending)
    return (
      <section aria-hidden="true">
        <Spinner testId="spinner" interactionName="load" label="Loading" />
      </section>
    );
  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="flow-col bg-gray-100 w-[100%] md:w-[80%] p-6 rounded-[5px] [&_article]:justify-center items-end">
      {data &&
        data.map((episode: SeasonEpisodeProps) => {
          return (
            <section  className=" mb-2 hover:bg-gray-300" key={episode.id}>

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
        })
        }
    </section>
  );
};

export default SearchResultTable;

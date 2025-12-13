"use client";

import Episode from "../episodes/Episode";
import DropdownGroupItem from "../../common/DropdownGroupItem";
import { SeasonEpisodeProps, SeasonProps } from "./SeasonsTypes";
import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "./SeasonsServerFunctions";

const Seasons = ({ seasonId, seasonNumber }: SeasonProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => getEpisodes(seasonId),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section aria-label={"Season" + seasonNumber + "episode list"}>
      {data &&
        data.map((episode: SeasonEpisodeProps) => {
          return (
            <DropdownGroupItem
              key={episode.id}
              url={`/episode-details/${episode.season}/${episode.number}`}
            >
              <Episode
                key={episode.id}
                image={episode.image}
                name={episode.name}
                number={episode.number}
              />
            </DropdownGroupItem>
          );
        })}
    </section>
  );
};

export default Seasons;

"use client";

import Episode from "../episodes/Episode";
import DropdownGroupItem from "../../common/dropdown-group-item/DropdownGroupItem";
import { SeasonEpisodeProps, SeasonProps } from "./SeasonsTypes";
import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../../utils/SeasonsUtils";

const Seasons = ({ seasonId }: SeasonProps) => {
  const { error, data } = useQuery({
    queryKey: [`episodes ${seasonId}`],
    queryFn: () => getEpisodes(seasonId),
  });



  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {" "}
      {data &&
        data.map((episode: SeasonEpisodeProps) => {
          return (
            <DropdownGroupItem
              key={episode.id}
              url={`/episode-details/${episode.season}/${episode.number}`}
              label={`Episode ${episode.number} ${episode.name}`}
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
    </>
  );
};

export default Seasons;

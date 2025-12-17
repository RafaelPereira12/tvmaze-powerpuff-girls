"use client";

import Episode from "../episodes/Episode";
import DropdownGroupItem from "../../common/dropdown-group-item/DropdownGroupItem";
import Spinner from "@atlaskit/spinner";
import { SeasonEpisodeProps, SeasonProps } from "./SeasonsTypes";
import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../../utils/SeasonsUtils";

const Seasons = ({ seasonId }: SeasonProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => getEpisodes(seasonId),
  });

  if (isPending)
    return (
      <section aria-hidden="true">
        <Spinner testId="spinner" interactionName="load" label="Loading" />
      </section>
    );

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

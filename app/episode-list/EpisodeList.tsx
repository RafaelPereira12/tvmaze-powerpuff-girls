"use client";
import Seasons from "./seasons/Seasons";
import DropdownMenu from "../common/DropdownMenu";
import DropdownGroup from "../common/DropdownGroup";
import { getSeasons } from "./EpisodeListServerFunctions";
import { useQuery } from "@tanstack/react-query";
import { css } from "@emotion/react";

const EpisodeList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["seasons"],
    queryFn: () => getSeasons(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data &&
        data.map((season: SeasonProps, i: number) => {
          return (
            <DropdownMenu key={season.id} seasonNumber={i + 1}>
              <DropdownGroup key={season.id}>
                <Seasons
                  key={season.id}
                  seasonId={season.id}
                  seasonNumber={i + 1}
                />
              </DropdownGroup>
            </DropdownMenu>
          );
        })}
    </>
  );
};

type SeasonProps = {
  id: number;
};

export default EpisodeList;

"use client";
import Seasons from "../seasons/Seasons";
import DropdownMenu from "../../common/dropdpwn-menu/DropdownMenu";
import DropdownGroup from "../../common/dropdown-group/DropdownGroup";
import { getSeasons } from "../../utils/EpisodeListUtils";
import { useQuery } from "@tanstack/react-query";

const EpisodeList = () => {
  const {error, data } = useQuery({
    queryKey: [`season `],
    queryFn: () => getSeasons(),
  });

 

  if (error) return "An error has occurred: " + error.message;

  return (
    <section
      className="grid 
                        grid-cols-[1fr] 
                        sm:grid-cols-[1fr_1fr] 
                        md:grid-cols-[1fr_1fr] 
                        lg:grid-cols-[1fr_1fr_1fr] 
                        w-full 
                        justify-between 
                        items-start 
                        p-4"
    >
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
    </section>
  );
};

type SeasonProps = {
  id: number;
};

export default EpisodeList;

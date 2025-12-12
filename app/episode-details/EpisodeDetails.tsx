"use client"

import Image from "next/image";
import ImageIcon from "@atlaskit/icon/core/image";
import { EpisodeDetailsProps } from "./EpisodeDetailsTypes";
import { useQuery } from "@tanstack/react-query";
import { getEpisodeDetails } from "./EpisodeDetailsServerFunctions";

const EpisodeDetails = ({ season, number }: EpisodeDetailsProps) => {
 const { isPending, error, data } = useQuery({
    queryKey: ["show details"],
    queryFn: () => getEpisodeDetails(season, number),
  });
   if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      {data && (
        <section>
            {data.image ? (
              <Image
                src={data.image.medium}
                alt="Episode Thumbnail Image"
                aria-label="Episode Thumbnail Image"
                tabIndex={0}
                width={500}
                height={500} //change this to proper styling
              />
            ) : (
              <ImageIcon aria-label="No Image"  label="No Image"/>
            )}
          <article tabIndex={0}>
            <h5>Title</h5>
            <h3>{data.name}</h3>
          </article>
          <article tabIndex={0}>
            <h5>Episode</h5>
            <h3>{data.number}</h3>
          </article>

          <article tabIndex={0}>
            <h3>Episode Description</h3>
            {
              data.summary ? (
                <h4>{data.summary.replace(/(<([^>]+)>)/gi, " ")}</h4>

              ): (
                <h4> Not available </h4>
              )
            }
          </article>
        </section>
      )}
    </>
  );
};


export default EpisodeDetails;

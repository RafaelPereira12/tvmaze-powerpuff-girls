"use client";

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
        <section
          className="grid 
                grid-cols-[2fr] 
                sm:grid-cols-[1fr]
                lg:grid-cols-[1fr_2fr]
                grid-rows-5
                justify-items-center 
                items-center
                h-fit
                "
        >
          {data.image ? (
            <Image
              src={data.image.medium}
              alt="Episode Thumbnail Image"
              className="row-span-5 
                        cols-span-1 
                        rounded-[5px] 
                        mb-6
                        md:mr-6
                        drop-shadow-lg/50"
              aria-label="Episode Thumbnail Image"
              tabIndex={0}
              width={500}
              height={500} //change this to proper styling
            />
          ) : (
            <ImageIcon aria-label="No Image" label="No Image" />
          )}
          <article
            className="flex row-span-1 cols-span-1 w-full h-fit"
            tabIndex={0}
          >
            <h3
              className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)
                        font-bold
                        mr-2
                       "
            >
              Title:
            </h3>
            <h3
              className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)]
                        "
            >
              {data.name}
            </h3>
          </article>
          <article
            className="flex row-span-1 cols-span-1 w-full h-fit"
            tabIndex={0}
          >
            <h3
              className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)
                        font-bold
                        mr-2
                        "
            >
              Episode Nº:
            </h3>
            <h3
              className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)]
                        "
            >
              {data.number}
            </h3>
          </article>

          <article
            className="row-span-3 cols-span-1 w-full h-fit"
            tabIndex={0}
          >
            <h3
              className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)
                        font-bold
                        "
            >
              Episode Description:{" "}
            </h3>
            {data.summary ? (
              <h3
                className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)]
                        "
              >
                {data.summary.replace(/(<([^>]+)>)/gi, " ")}
              </h3>
            ) : (
              <h3
                className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text)] 
                        lg:[font-size:var(--font-size-text)]
                        "
              >
                {" "}
                Content not available{" "}
              </h3>
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default EpisodeDetails;

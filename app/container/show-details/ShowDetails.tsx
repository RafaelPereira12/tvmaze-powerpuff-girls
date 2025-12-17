"use client";

import Image from "next/image";
import { getShowDetails } from "../../utils/ShowDetailsUtils";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@atlaskit/spinner";

const ShowDetails = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["show details"],
    queryFn: () => getShowDetails(),
  });
  if (isPending)
    return (
      <section aria-hidden="true">
        <Spinner testId="spinner" interactionName="load" label="Loading" />;
      </section>
    );

  if (error) return "An error has occurred: " + error.message;
  return (
    <section
      className="grid 
                grid-cols-[2fr] 
                sm:grid-cols-[1fr_2fr]
                md:grid-cols-[1fr_2fr]
                justify-items-center 
                items-center
                "
    >
      {data.image?.original && (
        <Image
          className="w-[150px] 
                    h-[200px] 
                    sm:w-[150px] 
                    sm:h-[200px] 
                    md:w-[200px] 
                    md:h-[300px] 
                    lg:w-[200px] 
                    lg:h-[300px] 
                    rounded-[5px] 
                    mb-2
                    drop-shadow-lg/50"
          src={data.image.original}
          alt="Show Image"
          aria-label="Series Poster Image"
          tabIndex={0}
          width={200}
          height={200} // proper styling please
        />
      )}
      <article className="self-start justify-items-start" tabIndex={0}>
        <h1
          className="[font-size:var(--font-size-header-mobile)] 
                        sm:[font-size:var(--font-size-header-mobile)] 
                        md:[font-size:var(--font-size-header-mobile)] 
                        lg:[font-size:var(--font-size-header)]
                        font-bold
                       "
        >
          Title: {data.name}
        </h1>
        <h3
          className="[font-size:var(--font-size-text-mobile)] 
                        sm:[font-size:var(--font-size-text-mobile)] 
                        md:[font-size:var(--font-size-text-mobile)] 
                        lg:[font-size:var(--font-size-text)]
                        "
        >
          Description: {data.summary.replace(/(<([^>]+)>)/gi, " ")}
        </h3>
      </article>
    </section>
  );
};

export default ShowDetails;

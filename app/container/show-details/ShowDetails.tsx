"use client"

import Image from "next/image";
import { getShowDetails } from "./ShowDetailsServerFunctions";
import { useQuery } from "@tanstack/react-query";

const ShowDetails = () => {
   const { isPending, error, data } = useQuery({
    queryKey: ["show details"],
    queryFn: () => getShowDetails(),
  });
   if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <section className="display-inline">
      <article tabIndex={0}>
        <h1 className="sm:text-red">Title: {data.name}</h1>
      </article>
      <article tabIndex={0}>
        <h1>
          Description: {data.summary.replace(/(<([^>]+)>)/gi, " ")}
        </h1>
      </article>
      <Image
        src={data.image.original}
        alt="Show Image"
        aria-label="Series Poster Image"
        tabIndex={0}
        width={200}
        height={200} // proper styling please
      />
    </section>
  );
};

export default ShowDetails;

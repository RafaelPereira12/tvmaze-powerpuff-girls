import Image from "next/image";

const ShowDetails = async () => {
  const response = await fetch("https://api.tvmaze.com/shows/1955");

  const showDetails = await response.json();
  return (
    <>
      <article tabIndex={0}>
        <h1 className="sm:text-red">Title: {showDetails.name}</h1>
      </article>
      <article tabIndex={0}>
        <h1>
          Description: {showDetails.summary.replace(/(<([^>]+)>)/gi, " ")}
        </h1>
      </article>
      <Image
        src={showDetails.image.original}
        alt="Show Image"
        aria-label="Series Poster Image"
        tabIndex={0}
        width={500}
        height={500} // proper styling please
      />
    </>
  );
};

export default ShowDetails;

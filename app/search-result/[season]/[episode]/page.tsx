import EpisodeDetails from "@/app/episode-details/EpisodeDetails";
import SearchResultTable from "../../SearchResultTable";

const page = async ({
  params,
}: {
  params: { season: string; episode?: string };
}) => {
  const resolvedParams = await params;

  if (resolvedParams.episode !== "undefined")
    return (
      <main
        className="flex h-[87vh] w-full flex-col items-center justify-between pt-16 px-16 mb:16 sm:items-start focus:outline-none"
        aria-label="Your search result. Episode Details page"
        tabIndex={-1}
      >
        <EpisodeDetails
          season={Number(resolvedParams.season)}
          number={Number(resolvedParams.episode)}
        />
      </main>
    );

  if (Number(resolvedParams.season) > 6)
    return (
      <main
        className="flex min-h-[79vh] h-full w-full flex-col items-center justify-center pt-16 px-16 mb-16 focus:outline-none"
        aria-label="We're sorry, but the season you searched for does not exist"
        tabIndex={-1}
      >
        <h1 aria-hidden="true">Season does not exist</h1>
      </main>
    );
  return (
    <main
      className="flex min-h-[79vh] w-full flex-col items-center justify-center pt-16 px-16 mb-16 focus:outline-none"
      aria-label={`Your search result, Season ${resolvedParams.season} episode list`}
      tabIndex={-1}
    >
      <SearchResultTable seasonNumber={Number(resolvedParams.season)} />
    </main>
  );
};

export default page;

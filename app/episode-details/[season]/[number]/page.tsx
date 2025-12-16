import EpisodeDetails from "../../EpisodeDetails";

const EpisodeDetailsPage = async ({
  params,
}: {
  params: { season: string; number: string };
}) => {
  const resolvedParams = await params;

  return (
    <main
      className="flex h-[87vh] w-full flex-col items-center justify-between pt-16 px-16 mb:16 sm:items-start focus:outline-none"
      aria-label="Episode Details page"
      tabIndex={-1}
    >
      <EpisodeDetails
        season={Number(resolvedParams.season)}
        number={Number(resolvedParams.number)}
      />
    </main>
  );
};

export default EpisodeDetailsPage;

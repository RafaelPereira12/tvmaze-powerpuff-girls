import EpisodeDetails from '../../EpisodeDetails'

import Link from "next/link";

const EpisodeDetailsPage = async ({
  params,
}: {
  params: { season: string; number: string };
}) => {
  const resolvedParams = await params;

  return (
    <main>
      Episode Details
      <Link href="/">Back to home</Link>
      <EpisodeDetails
        season={Number(resolvedParams.season)}
        number={Number(resolvedParams.number)}
      />
    </main>
  );
};

export default EpisodeDetailsPage;
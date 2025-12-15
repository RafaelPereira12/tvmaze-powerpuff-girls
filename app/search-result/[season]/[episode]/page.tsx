import EpisodeDetails from "@/app/episode-details/EpisodeDetails";
import SearchResultTable from "../../SearchResultTable";

const page = async ({
  params,
}: {
  params: { season: string; episode?: string };
}) => {
  const resolvedParams = await params;


  if (resolvedParams.episode !== 'undefined') 
    return (
  <main className='flex h-[87vh] w-full flex-col items-center justify-between pt-16 px-16 mb:16 sm:items-start'>
    <EpisodeDetails season={Number(resolvedParams.season)} number={Number(resolvedParams.episode)}/>

  </main>
  )

  if(Number(resolvedParams.season) > 6) return <h1>Season does not exist</h1>
  return (
    <main className="flex  w-full flex-col items-center justify-center pt-16 px-16 mb-16">
      <SearchResultTable
        seasonNumber={Number(resolvedParams.season)}
      />
    </main>
  );
  
};

export default page;

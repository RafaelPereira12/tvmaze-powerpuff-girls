import EpisodeListPage from "./episode-list/page";

export default function Home() {
return (
      <main className="flex h-[86vh] w-full flex-col items-center justify-between pt-16 px-16 sm:items-start">
        <EpisodeListPage/>
      </main>
  );
}

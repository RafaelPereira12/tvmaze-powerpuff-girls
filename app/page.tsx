import EpisodeListPage from "./episode-list/page";

export default function Home() {
return (
      <main className="flex min-h-[86vh] w-full flex-col items-center justify-between pt-16 px-16 mb-16sm:items-start">
        <EpisodeListPage/>
      </main>
  );
}

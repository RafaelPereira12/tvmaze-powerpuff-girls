import EpisodeListPage from "./episode-list/page";

export default function Home() {
return (
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-16 px-16 sm:items-start">
        <EpisodeListPage/>
      </main>
  );
}

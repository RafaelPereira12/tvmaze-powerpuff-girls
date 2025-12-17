import ShowDetails from "./container/show-details/ShowDetails";
import EpisodeList from "./container/episode-list/EpisodeList";

export default function Home() {
  return (
    <main
      className="flex min-h-[86vh] w-full flex-col items-center justify-start pt-16 px-16 mb-16sm:items-start focus:outline-none"
      aria-label="Homepage"
      tabIndex={-1}
    >
      <ShowDetails />
      <EpisodeList />
    </main>
  );
}

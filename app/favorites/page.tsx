import FavoritesTable from "./FavoritesTable";

const FavoritesPage = () => {
  return (
    <main
      className="flex min-h-[79vh] w-full flex-col items-center justify-start pt-16 px-16 mb-16 focus:outline-none"
      aria-label="Favorite episodes list page"
      tabIndex={-1}
    >
      <FavoritesTable />
    </main>
  );
};

export default FavoritesPage;

export const getSeasons = async () => {
  const res = await fetch(
    "https://api.tvmaze.com/shows/1955/seasons"
  ).then((res) => res.json());
  return res;
};
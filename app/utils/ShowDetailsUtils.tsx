export const getShowDetails = async () => {
  const res = await fetch(
    "https://api.tvmaze.com/shows/1955"
  ).then((res) => res.json());
  return res;
};

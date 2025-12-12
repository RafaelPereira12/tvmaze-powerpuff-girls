export const getEpisodes = async (seasonId: number) => {
  const res = await fetch(
    `https://api.tvmaze.com/seasons/${seasonId}/episodes`
  ).then((res) => res.json());
  return res;
};

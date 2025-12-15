"use server"

export const getEpisodeDetails = async (season:number, number:number) => {
  const res = await fetch(
    `https://api.tvmaze.com/shows/1955/episodebynumber?season=${season}&number=${number}`
  ).then((res) => res.json());
  return res;
};

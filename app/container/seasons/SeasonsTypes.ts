export type SeasonEpisodeProps = {
  id: number;
  image: {
    medium: string;
  };
  number: number;
  name: string;
  season: number;
};

export type SeasonProps = {
  seasonId: number;
  seasonNumber: number;
};
"use client"

import { json } from "stream/consumers";
import { EpisodeProps } from "../container/episodes/EpisodeTypes";
import { AddToFavoriteProps } from "../common/add-to-favorites-button/AddToFavoritesTypes";

export const getFavorites = async () => {
  const res = await fetch("http://localhost:3000/api/posts").then((res) =>
    res.json()
  );
  return res;
};

export const createFavorite = async (episode: AddToFavoriteProps) => {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(episode),
  });
  return res.json();
};

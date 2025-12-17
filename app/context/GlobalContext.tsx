"use client"
import React, { useContext, useState } from "react";
import { AddToFavoriteProps } from "../common/add-to-favorites-button/AddToFavoritesTypes";

const GlobalContext = React.createContext<{
  favorites: AddToFavoriteProps[];
  AddToFavorites: (favoriteEpisode: AddToFavoriteProps) => void;
  DeleteFromFavorites: (favoriteEpisode: AddToFavoriteProps) => void;
}>({
  favorites: [],
  AddToFavorites: () => {},
  DeleteFromFavorites: () => {},
});

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [favorites, setFavorites] = useState<AddToFavoriteProps[]>([]);

  const AddToFavorites = (favoriteEpisode: AddToFavoriteProps) => {
    setFavorites((favorites) => [...favorites, favoriteEpisode]);
  };

  const DeleteFromFavorites = (favoriteEpisode: AddToFavoriteProps) => {
    const episodeToRemove = favorites.filter(
      (episode) => episode.id !== favoriteEpisode.id
    );
    setFavorites(episodeToRemove);
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        AddToFavorites,
        DeleteFromFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFavorite, getFavorites } from "../../utils/FavoritesUtils";
import { AddToFavoriteProps } from "./AddToFavoritesTypes";
import StarStarredIcon from "@atlaskit/icon/core/star-starred";
import StarUnstarredIcon from "@atlaskit/icon/core/star-unstarred";
import Spinner from "@atlaskit/spinner";
import { useState } from "react";
import Button from "@atlaskit/button/new";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { SeasonEpisodeProps } from "@/app/container/seasons/SeasonsTypes";

const AddToFavoritesButton = ({
  id,
  image,
  name,
  number,
  season,
}: AddToFavoriteProps) => {
  const episode = { id, image, name, number, season };
  const [announcement, setAnnouncement] = useState("");
  const queryClient = useQueryClient();
  const {favorites, AddToFavorites, DeleteFromFavorites} = useGlobalContext();



  const isFavorite = favorites?.some(
    (favorite: AddToFavoriteProps) => favorite.id === episode.id
  );


  const handleOnClick = () => {
    if (!isFavorite) {
      AddToFavorites(episode)
      setAnnouncement("Episode Added");
    } else {
      DeleteFromFavorites(episode)
      setAnnouncement("Episode removed");
    }
  };

  if (isFavorite)
    return (
      <section
        className="[&_span:first-child]:text-[var(--color-pink)] 
                          [&_button]:!bg-[#f3f5f3] 
                          [&_span]:[font-size:var(--font-size-dropdown-mobile)!important] 
                          [&_span]:[sm:[font-size:var(--font-size-dropdown-mobile)!important] 
                          [&_span]:[md:[font-size:var(--font-size-text-mobile)!important] 
                          [&_span]:[lg:[font-size:var(--font-size-text-mobile)!important]
                          mb-6
                          lg:mb-0
                          "
      >
        <Button
          onClick={() => handleOnClick()}
          aria-label="Remove Episode From Favorites"
          iconBefore={StarStarredIcon}
        >
          Remove from favorites
        </Button>
        <article aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </article>
      </section>
    );

  return (
    <section
      className="[&_button]:!bg-[#f3f5f3] 
              [&_span]:!font-size:var(--font-size-dropdown-mobile)] 
              [&_span]:!sm:[font-size:var(--font-size-dropdown-mobile)] 
              [&_span]:!md:[font-size:var(--font-size-text-mobile)] 
              [&_span]:!lg:[font-size:var(--font-size-text-mobile)]
              mb-6
              lg:mb-0
              "
    >
      <Button
        onClick={() => handleOnClick()}
        aria-label="Add Episode to Favorites"
        iconBefore={StarUnstarredIcon}
      >
        Add to favorites
      </Button>
      <article aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </article>
    </section>
  );
};

export default AddToFavoritesButton;

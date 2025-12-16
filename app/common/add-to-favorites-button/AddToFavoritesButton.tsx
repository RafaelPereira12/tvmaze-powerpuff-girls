import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createFavorite,
  getFavorites,
} from "../../favorites/FavoritesServerFunctions";
import { AddToFavoriteProps } from "./AddToFavoritesTypes";
import StarStarredIcon from "@atlaskit/icon/core/star-starred";
import StarUnstarredIcon from "@atlaskit/icon/core/star-unstarred";
import Spinner from "@atlaskit/spinner";
import { useState } from "react";
import Button from "@atlaskit/button/new";

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

  const { data, isPending, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const isFavorite = data?.some(
    (favorite: AddToFavoriteProps) => favorite.id === episode.id
  );

  const mutation = useMutation({
    mutationFn: createFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  const handleOnClick = () => {
    mutation.mutate(episode);
    if (announcement === "Episode removed") {
      setAnnouncement("Episode Added");
    } else {
      setAnnouncement("Episode removed");
    }
  };

  if (isPending)
    return (
      <section aria-hidden="true">
        <Spinner testId="spinner" interactionName="load" label="Loading" />;
      </section>
    );

  if (error) return "An error has occurred: " + error.message;

  if (isFavorite)
    return (
      <section
        className="[&_span:first-child]:text-[#ed0874] 
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
          {/* <article
            className="flex justify-center items-center text-[#ed0874] md:scale-200 mr-2"
            aria-hidden="true"
          >
            <StarStarredIcon
              spacing="spacious"
              label="Remove episode from favorites"
            />
          </article> */}
          {/* <h3
            className="[font-size:var(--font-size-dropdown-mobile)] 
          sm:[font-size:var(--font-size-dropdown-mobile)] 
          md:[font-size:var(--font-size-text-mobile)] 
          lg:[font-size:var(--font-size-text-mobile)]
          "
            aria-hidden="true"
          > */}
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
              "
    >
      <Button
        onClick={() => handleOnClick()}
        aria-label="Add Episode to Favorites"
        iconBefore={StarUnstarredIcon}
      >
        {/* <article
          className="flex justify-center items-center md:scale-200 mr-2 "
          aria-hidden="true"
        >
          <StarUnstarredIcon
            spacing="spacious"
            label="Add episode to favorites"
          />
        </article>
        <h3
          className="[font-size:var(--font-size-dropdown-mobile)] 
        sm:[font-size:var(--font-size-dropdown-mobile)] 
        md:[font-size:var(--font-size-text-mobile)] 
        lg:[font-size:var(--font-size-text-mobile)]
        "
          aria-hidden="true"
        > */}
        Add to favorites
        {/* </h3> */}
      </Button>
      <article aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </article>
    </section>
  );
};

export default AddToFavoritesButton;

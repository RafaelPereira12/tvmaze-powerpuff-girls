import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createFavorite,
  getFavorites,
} from "../../favorites/FavoritesServerFunctions";
import { AddToFavoriteProps } from "./AddToFavoritesTypes";
import StarStarredIcon from "@atlaskit/icon/core/star-starred";
import StarUnstarredIcon from "@atlaskit/icon/core/star-unstarred";
import Spinner from "@atlaskit/spinner";

const AddToFavoritesButton = ({
  id,
  image,
  name,
  number,
  season,
}: AddToFavoriteProps) => {
  const episode = { id, image, name, number, season };
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

  if (isPending)
    return <Spinner testId="spinner" interactionName="load" label="Loading" />;

  if (error) return "An error has occurred: " + error.message;

  if (isFavorite)
    return (
      <button
        onClick={() => mutation.mutate(episode)}
        className="flex hover:cursor-pointer"
      >
        <article className="flex justify-center items-center text-[#ed0874] md:scale-200 mr-2">
          <StarStarredIcon
            spacing="spacious"
            label="Remove episode from favorites"
          />
        </article>
        <h3
          className="[font-size:var(--font-size-dropdown-mobile)] 
                        sm:[font-size:var(--font-size-dropdown-mobile)] 
                        md:[font-size:var(--font-size-text-mobile)] 
                        lg:[font-size:var(--font-size-text-mobile)]
                        "
        >
          Remove from favorites
        </h3>
      </button>
    );

  return (
    <button
      onClick={() => mutation.mutate(episode)}
      className="flex hover:cursor-pointer"
    >
      <article className="flex justify-center items-center md:scale-200 mr-2">
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
      >
        Add to favorites
      </h3>
    </button>
  );
};

export default AddToFavoritesButton;

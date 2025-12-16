import Image from "next/image";
import ImageIcon from "@atlaskit/icon/core/image";
import { EpisodeProps } from "./EpisodeTypes";


const Episode = ({ image, number, name }: EpisodeProps) => {
  return (
    <section
    // aria-label={`Episode ${number} ${name}`}
      className="grid
                 grid-cols-[1fr]
                 grid-rows-[fr_1fr]
                 sm:grid-cols-[2fr_4fr]
                 md:grid-cols-[2fr_4fr]
                 md:grid-rows-1
                 h-[150px]
                 md:h-[100px]
                 text-black
                 hover:text-[var(--color-pink)]
                "
    >
      <figure className="flex justify-center items-center" aria-hidden="true">
        {image ? (
          <Image
            src={image.medium}
            alt="Episode Image"
            className="rounded-[5px] md:mr-6"
            width={175}
            height={175}
          />
        ) : (
          <ImageIcon label="No image found" />
        )}
      </figure>
      <section>

      <article className="w-fit" >
        <h1
          className="[font-size:var(--font-size-dropdown-mobile)] 
          sm:[font-size:var(--font-size-text-mobile)] 
          md:[font-size:var(--font-size-text-mobile)] 
          lg:[font-size:var(--font-size-text)]
          "
          aria-hidden="true"
          >
          Ep. {number} | {name}
        </h1>
      </article>
          </section>
    </section>
  );
};

export default Episode;

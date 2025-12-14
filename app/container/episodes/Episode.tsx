import Image from "next/image";
import ImageIcon from "@atlaskit/icon/core/image";
import { EpisodeProps } from "./EpisodeTypes";

const Episode = ({ image, number, name }: EpisodeProps) => {
  return (
    <section  aria-label={"Episode" + number + name + ","}>
      {image ? (
        <Image
          src={image.medium}
          alt="Episode Image"
          width={500}
          height={500}
        />
      ) : (
        <ImageIcon label="No Image" />
      )}
      <article>
        <h1>
          Ep. {number} | {name}
        </h1>
      </article>
    </section>
  );
};



export default Episode;

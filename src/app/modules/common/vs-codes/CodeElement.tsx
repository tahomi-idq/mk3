import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../../context/PlayerContext";
import dragon from "../../../../assets/images/dragon.jpg";
import mk from "../../../../assets/images/mk.jpg";
import inPhoto from "../../../../assets/images/in.jpg";
import three from "../../../../assets/images/three.jpg";
import quest from "../../../../assets/images/quest.jpg";
import flash from "../../../../assets/images/flash.jpg";
import krakoziabra from "../../../../assets/images/krakoziabra.jpg";
import chineze from "../../../../assets/images/chineze.jpg";
import samurai from "../../../../assets/images/samurai.jpg";
import scull from "../../../../assets/images/scull.jpg";

const images: string[] = [
  dragon,
  mk,
  inPhoto,
  three,
  quest,
  flash,
  krakoziabra,
  chineze,
  samurai,
  scull,
];

const imgClasses = "w-16 h-16 border-4 border-gray-800";

export default function CodeElement({ code }: { code: string }): JSX.Element {
  const [counter, setCounter] = useState(0);

  const { player } = useContext(PlayerContext);

  useEffect(() => {
    const inputEvent = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === code) {
        player.playVsCode();

        if (counter + 1 < images.length) {
          setCounter(counter + 1);
        }
      } else {
        return;
      }

      event.preventDefault();
    };

    window.addEventListener("keydown", inputEvent);

    return () => {
      window.removeEventListener("keydown", inputEvent);
    };
  }, [counter]);

  return <img className={imgClasses} src={images[counter]} alt="" />;
}

import React, { useState, useEffect, useContext } from "react";
import { Character } from "../../../../lib/characters/character";
import { GameContext } from "../../../../context/GameContext";
import { LockedCharactersContext } from "./LockedCharactersContext";

export default function CharacterCard({
  character,
}: {
  character: Character;
}): JSX.Element {
  const p1Styles = " border-green-600 ";
  const p2Styles = " border-red-700 ";
  const whiteShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";

  const [classes, setClasses] = useState("");
  const [p1Selected, setP1Selected] = useState(false);
  const [p2Selected, setP2Selected] = useState(false);

  const { p1Character: p1, p2Character: p2 } = useContext(GameContext);
  const { p1Locked, p2Locked } = useContext(LockedCharactersContext);

  useEffect(() => {
    setClasses(
      "relative box-border border-8  border-gray-800 w-[234px] h-[284px] " +
        (p1Selected ? p1Styles : p2Selected ? p2Styles : " ")
    );
  }, [p1Selected, p2Selected]);

  useEffect(() => {
    setP1Selected(p1 === character);
    setP2Selected(p2 === character);
  }, [p1, p2]);

  useEffect(() => {
    if ((p1Locked && p1Selected) || (p2Locked && p2Selected)) {
      setClasses(classes + " blink");
    }
  }, [p1Locked, p2Locked]);

  return (
    <div
      style={{
        backgroundImage: `url(${character.icon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
      className={classes}
    >
      <div className={`absolute w-full h-full`}>
        <div className="relative w-full h-full">
          {p1Selected ? (
            <span
              style={{
                textShadow: whiteShadow,
              }}
              className="absolute top-2 left-2 text-green-600"
            >
              P1
            </span>
          ) : null}
          {p2Selected ? (
            <span
              style={{
                textShadow: whiteShadow,
              }}
              className="absolute bottom-2 right-2 text-red-700"
            >
              P2
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

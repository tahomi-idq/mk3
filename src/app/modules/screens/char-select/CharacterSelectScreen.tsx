import React, { useContext, useEffect, useState } from "react";
import ScreenConfig from "../ScreenConfig";
import { PlayerContext } from "../../../context/PlayerContext";
import charBack from "../../../../assets/images/vs-back.jpeg";
import CharacterCardList from "./character-grid/CharacterCardList";
import { GameContext } from "../../../context/GameContext";

export default function CharacterSelectScreen({
  nextScreen,
}: CharacterSelectConfig): JSX.Element {
  const { player } = useContext(PlayerContext);
  const { p1Character: p1, p2Character: p2 } = useContext(GameContext);
  const [screenStarted, setScreenStarted] = useState(false);

  useEffect(() => {
    if (!screenStarted) {
      player.playFirstScreenAudio();

      setScreenStarted(true);
    }
  }, []);

  return (
    <div className="w-screen h-screen relative text-white">
      <div className="w-screen h-screen absolute z-0">
        <img src={charBack} className="h-screen w-screen" alt="" />
      </div>
      <div className="absolute z-10 w-screen h-screen grid grid-cols-[1fr_minmax(1200px,_2fr)_1fr]">
        <div className="flex">
          <img
            className="mt-auto ml-auto mr-auto"
            style={{ height: "600px" }}
            height={600}
            src={p1.sprite}
            alt=""
          />
        </div>
        <div className="h-screen w-[100%] flex flex-col">
          <h1 className="text-center p-4 text-xl">SELECT YOUR FIGHTER</h1>
          <CharacterCardList afterPlayersLock={() => nextScreen()} />
          <h1 className="text-center p-4 text-xl">KOMBAT ZONE: SOUL CHAMBER</h1>
        </div>
        <div className="flex">
          <img
            className="mt-auto ml-auto mr-auto"
            height={600}
            style={{
              height: "600px",
              transform: "scale(-1, 1)",
            }}
            src={p2.sprite}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

interface CharacterSelectConfig extends ScreenConfig {}

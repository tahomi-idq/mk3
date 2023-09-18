import vsBack from "../../../../assets/images/vs-back.png";
import React, { useContext, useEffect } from "react";
import ScreenConfig from "../ScreenConfig";
import VsCodes from "../../common/vs-codes/vsCodes";
import { PlayerContext } from "../../../context/PlayerContext";
import { GameContext } from "../../../context/GameContext";

export default function VsScreen({ nextScreen }: VsScreenConfig): JSX.Element {
  const { player } = useContext(PlayerContext);
  const { p1Character: p1, p2Character: p2 } = useContext(GameContext);

  useEffect(() => {
    player.playVsMusic();

    setTimeout(() => {
      nextScreen();
    }, 6000);
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <div className="w-screen h-screen absolute z-0">
        <img src={vsBack} className="h-screen w-screen" alt="" />
      </div>
      <div className="w-screen h-screen absolute z-10 grid grid-cols-2">
        <div className="flex">
          <img className="h-[800px] mt-auto mr-auto" src={p1.photo} alt="" />
        </div>
        <div className="flex">
          <img
            className="h-[800px] mt-auto ml-auto"
            src={p2.photo}
            style={{ transform: "scale(-1, 1)" }}
            alt=""
          />
        </div>
      </div>
      <div className="z-20 w-screen h-screen absolute flex">
        <div className="mt-auto ml-auto mr-auto mb-5">
          <VsCodes />
        </div>
      </div>
    </div>
  );
}

interface VsScreenConfig extends ScreenConfig {}

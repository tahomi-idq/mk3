import React, { useEffect, useState } from "react";
import { PlayerContext } from "./context/PlayerContext";
import { AudioPlayer } from "./lib/audio/AudioUtils";
import Hint from "./modules/common/hint/hint";
import { GameContext } from "./context/GameContext";
import AppRouter from "./modules/router/AppRouter";
import { CharacterGrid, tempCharacters } from "./lib/characters/CharacterGrid";

export default function App() {
  const [player, setPlayer]: [AudioPlayer, React.Dispatch<AudioPlayer>] =
    useState(null);

  const [characterGrid, setCharacterGrid] = useState(null);
  const [p1Character, setP1character] = useState(null);
  const [p2Character, setP2character] = useState(null);

  useEffect(() => {
    setPlayer(new AudioPlayer());
    let charGr = new CharacterGrid(tempCharacters, 5);
    setCharacterGrid(charGr);
    setP1character(charGr.getFirst());
    setP2character(charGr.getSecond());
  }, []);

  return (
    <div className="relative">
      <PlayerContext.Provider
        value={{
          player: player,
        }}
      >
        <GameContext.Provider
          value={{
            p1Character: p1Character,
            setP1Character: setP1character,
            p2Character: p2Character,
            setP2Character: setP2character,
            characterGrid: characterGrid,
          }}
        >
          <AppRouter />
        </GameContext.Provider>
      </PlayerContext.Provider>

      <div className="absolute right-0 top-0 z-50">
        <Hint />
      </div>
    </div>
  );
}

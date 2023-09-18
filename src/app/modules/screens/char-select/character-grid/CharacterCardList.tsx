import CharacterCard from "./CharaterCard";
import React, { useContext, useEffect, useState } from "react";
import { LockedCharactersContext } from "./LockedCharactersContext";
import { PlayerContext } from "../../../../context/PlayerContext";
import { GameContext } from "../../../../context/GameContext";

export default function CharacterCardList({
  afterPlayersLock,
}: {
  afterPlayersLock: () => {};
}): JSX.Element {
  const [p1Lock, setP1Lock] = useState(false);
  const [p2Lock, setP2Lock] = useState(false);

  const { player } = useContext(PlayerContext);
  const {
    p1Character: p1,
    p2Character: p2,
    setP1Character,
    setP2Character,
    characterGrid,
  } = useContext(GameContext);

  const p1KeyEvent = (event: KeyboardEvent) => {
    const upEvent = function () {
      setP1Character(characterGrid.getTopToCharacter(p1));
    };
    const leftEvent = function () {
      setP1Character(characterGrid.getLeftToCharacter(p1));
    };
    const rightEvent = function () {
      setP1Character(characterGrid.getRightToCharacter(p1));
    };
    const botEvent = function () {
      setP1Character(characterGrid.getBotToCharacter(p1));
    };

    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        botEvent();
        break;
      case "ArrowUp":
        upEvent();
        break;
      case "ArrowLeft":
        leftEvent();
        break;
      case "ArrowRight":
        rightEvent();
        break;
      default:
        return;
    }

    event.preventDefault();
  };

  const p2KeyEvent = (event: KeyboardEvent) => {
    const upEvent = function () {
      setP2Character(characterGrid.getTopToCharacter(p2));
    };
    const leftEvent = function () {
      setP2Character(characterGrid.getLeftToCharacter(p2));
    };
    const rightEvent = function () {
      setP2Character(characterGrid.getRightToCharacter(p2));
    };
    const botEvent = function () {
      setP2Character(characterGrid.getBotToCharacter(p2));
    };

    if (event.defaultPrevented) {
      return;
    }

    switch (event.key.toLowerCase()) {
      case "s":
        botEvent();
        break;
      case "w":
        upEvent();
        break;
      case "a":
        leftEvent();
        break;
      case "d":
        rightEvent();
        break;
      default:
        return;
    }

    event.preventDefault();
  };

  useEffect(() => {
    if (player !== null) {
      player.playChangeChar();
    }

    if (!p1Lock) {
      window.addEventListener("keydown", p1KeyEvent);
    }

    if (!p2Lock) {
      window.addEventListener("keydown", p2KeyEvent);
    }

    const selectEndEvent = function (event: KeyboardEvent) {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case "Enter":
          window.removeEventListener("keydown", p1KeyEvent);
          setP1Lock(true);
          break;
        case " ":
          window.removeEventListener("keydown", p2KeyEvent);
          setP2Lock(true);
          break;
        default:
          return;
      }

      event.preventDefault();
    };

    window.addEventListener("keydown", selectEndEvent);

    return () => {
      window.removeEventListener("keydown", p1KeyEvent);
      window.removeEventListener("keydown", p2KeyEvent);
      window.removeEventListener("keydown", selectEndEvent);
    };
  }, [p1, p2]);

  useEffect(() => {
    if (p1Lock && p2Lock) {
      setTimeout(() => {
        afterPlayersLock();
        player.stopFirstScreenAudio();
      }, 2000);
    }
  }, [p1Lock, p2Lock]);

  return (
    <div className={`grid grid-cols-5 m-auto`}>
      <LockedCharactersContext.Provider
        value={{
          p1Locked: p1Lock,
          p2Locked: p2Lock,
        }}
      >
        {characterGrid.getCharactersList().map((item, index) => {
          return <CharacterCard key={index} character={item} />;
        })}
      </LockedCharactersContext.Provider>
    </div>
  );
}

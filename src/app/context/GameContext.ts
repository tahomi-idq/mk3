import { createContext } from "react";
import { Character } from "../lib/characters/character";
import { CharacterGrid } from "../lib/characters/CharacterGrid";

export const GameContext: React.Context<{
  p1Character: Character;
  setP1Character: React.Dispatch<React.SetStateAction<Character>>;
  p2Character: Character;
  setP2Character: React.Dispatch<React.SetStateAction<Character>>;
  characterGrid: CharacterGrid;
}> = createContext({
  p1Character: null,
  setP1Character: null,
  p2Character: null,
  setP2Character: null,
  characterGrid: null,
});

import { createContext } from "react";
import { getFirst, getSecond } from "../utils/CharacterUtils";
import { AudioPlayer } from "../utils/AudioUtils";

export const GameContext = createContext({
    p1: getFirst(),
    p2: getSecond(),
    player: new AudioPlayer()
})
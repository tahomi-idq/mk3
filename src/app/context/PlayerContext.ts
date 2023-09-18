import { createContext } from "react";
import { AudioPlayer } from "../lib/audio/AudioUtils";

export const PlayerContext = createContext({
  player: new AudioPlayer(),
});

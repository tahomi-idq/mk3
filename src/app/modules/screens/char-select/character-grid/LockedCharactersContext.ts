import { createContext } from "react";

export const LockedCharactersContext = createContext({
  p1Locked: false,
  p2Locked: false,
});

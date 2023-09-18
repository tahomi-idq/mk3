import React, { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import CharacterSelectScreen from "../screens/char-select/CharacterSelectScreen";
import VsScreen from "../screens/vsScreen/VsScreen";
import StartScreen from "../screens/start/StartScreen";

enum AppStages {
  FIRST_SCREEN = "first_screen",
  SECOND_SCREEN = "second_screen",
  START = "start",
}

export default function AppRouter(): JSX.Element {
  const { setP1Character, setP2Character, characterGrid } =
    useContext(GameContext);

  const [appStage, setAppStage] = useState(AppStages.START);

  const onFirstScreenEnd = function () {
    setAppStage(AppStages.SECOND_SCREEN);
  };

  const onSecondScreenEnd = function () {
    setAppStage(AppStages.START);
  };

  const onStart = function () {
    setAppStage(AppStages.FIRST_SCREEN);
    setP1Character(characterGrid.getFirst());
    setP2Character(characterGrid.getSecond());
  };

  switch (appStage) {
    case AppStages.FIRST_SCREEN:
      return <CharacterSelectScreen nextScreen={onFirstScreenEnd} />;
    case AppStages.SECOND_SCREEN:
      return <VsScreen nextScreen={onSecondScreenEnd} />;
    case AppStages.START:
      return <StartScreen nextScreen={onStart} />;
  }
}

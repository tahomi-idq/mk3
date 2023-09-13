import React, { useEffect, useState } from 'react';
import CharacterSelectScreen from './components/charSelect/CharacterSelectScreen';
import { Character } from './entities/character';
import VsScreen from './components/vsScreen/VsScreen';
import { GameContext } from './context/PlayerContext';
import { getFirst, getSecond } from './utils/CharacterUtils';
import { AudioPlayer } from './utils/AudioUtils';
import Hint from './components/hint';
import mk3 from "../assets/images/mk3.png"

export default function App() {

    const [appStage, setAppStage] = useState(AppStages.END);
    const [p1character, setP1character]: [Character, React.Dispatch<Character>] = useState(getFirst());
    const [p2character, setP2character]: [Character, React.Dispatch<Character>] = useState(getSecond());
    const [player, setPlayer]:[AudioPlayer, React.Dispatch<AudioPlayer>] = useState(null);

    const onFirstScreenEnd = function() {
        setAppStage(AppStages.SECOND_SCREEN);
    }

    const onSecondScreenEnd = function() {
        setAppStage(AppStages.END);
    }

    const restart = function() {
        setAppStage(AppStages.FIRST_SCREEN);
        setP1character(getFirst());
        setP2character(getSecond());
    }

    useEffect(()=>{
        setPlayer(new AudioPlayer());
    }, [])

    const render = function(jsx: JSX.Element|JSX.Element[]) {
        return <div className="relative">
            <GameContext.Provider value={{
                p1:p1character,
                p2:p2character,
                player:player
            }}>
                {jsx}
            </GameContext.Provider>
        
        <div className="absolute right-0 top-0 z-50">
            <Hint/>        
        </div>
        
        </div>
    }

    if(appStage === AppStages.FIRST_SCREEN) {
        return render(<CharacterSelectScreen 
        setP1character={(character:Character)=>{
            setP1character(character)
        }}
        setP2character={(character:Character)=>{
            setP2character(character)
        }}
        onEnd={onFirstScreenEnd}
        />)
    }

    if (appStage === AppStages.SECOND_SCREEN) {
        return render(<VsScreen
        onEnd={onSecondScreenEnd}
        />)
    }

    return render(<div className="w-screen h-screen relative flex flex-col">
            <img className="h-[90vh] w-auto" src={mk3} alt="" />
            <button className="mx-auto text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={restart}>Start app</button>
        </div>)
}

enum AppStages{
    FIRST_SCREEN="first_screen",
    SECOND_SCREEN="second_screen",
    END="end"
}
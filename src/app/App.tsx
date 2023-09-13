import React, { useEffect, useState } from 'react';
import CharacterSelectScreen from './components/charSelect/CharacterSelectScreen';
import { Character } from './entities/character';
import VsScreen from './components/vsScreen/VsScreen';
import { GameContext } from './context/PlayerContext';
import { getFirst, getSecond } from './utils/CharacterUtils';
import { AudioPlayer } from './utils/AudioUtils';

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
        
        <div className="absolute right-0 top-0">
            <div>
                P1: 
                left: {p1character.left}
                top: {p1character.top}   
            </div>
            <div>
                P2: 
                left: {p2character.left}
                top: {p2character.top}   
            </div>
             
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

    return render(<button className="border-4 m-2" onClick={restart}>Start app</button>)
}

enum AppStages{
    FIRST_SCREEN="first_screen",
    SECOND_SCREEN="second_screen",
    END="end"
}
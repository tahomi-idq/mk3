import React, { useState } from 'react';
import CharacterSelectScreen from './components/CharacterSelectScreen';
import { Character, characters } from './entities/characters';
import VsScreen from './components/VsScreen';

export default function App() {

    const [appStage, setAppStage] = useState(AppStages.FIRST_SCREEN);
    const [p1character, setP1character]: [Character, React.Dispatch<Character>] = useState(null);
    const [p2character, setP2character]: [Character, React.Dispatch<Character>] = useState(null);

    const onFirstScreenEnd = function() {
        setAppStage(AppStages.SECOND_SCREEN);
    }

    const onSecondScreenEnd = function() {
        setAppStage(AppStages.END);
    }

    const restart = function() {
        setAppStage(AppStages.FIRST_SCREEN)
    }

    const render = function(jsx: JSX.Element|JSX.Element[]):JSX.Element {
        return <div className="relative">
        {jsx}
        <div className="absolute right-0 top-0">{appStage}</div>
        
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
        p1={p1character}
        p2={p2character}
        onEnd={onSecondScreenEnd}
        />)
    }

    return render(<button className="border-4 m-2" onClick={restart}>Restart</button>)
}

enum AppStages{
    FIRST_SCREEN="first_screen",
    SECOND_SCREEN="second_screen",
    END="end"
}
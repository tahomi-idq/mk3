import React from "react"
import ScreenConfig from "./ScreenConfig"
import { Character } from "../entities/characters";

export default function CharacterSelectScreen({onEnd}:CharacterSelectConfig):JSX.Element {
    return <div className="w-screen h-screen"><button className="border-4 m-2"  onClick={()=>{
        onEnd();
    }}>Next</button></div>
}

interface CharacterSelectConfig extends ScreenConfig {
    setP1character:(character:Character)=>void,
    setP2character:(character:Character)=>void
}
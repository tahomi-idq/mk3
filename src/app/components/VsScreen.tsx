import { Character } from "../entities/characters";
import ScreenConfig from "./ScreenConfig";
import React from "react";

export default function VsScreen({p1, p2, onEnd}: VsScreenConfig):JSX.Element {
    return <div className="w-screen h-screen"><button className="border-4 m-2" onClick={()=>{
        onEnd();
    }}>Next</button></div>
}

interface VsScreenConfig extends ScreenConfig {
    p1:Character,
    p2:Character
}
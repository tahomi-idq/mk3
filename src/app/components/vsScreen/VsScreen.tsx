import { Character } from "../../entities/character";
import ScreenConfig from "../ScreenConfig";
import React from "react";

export default function VsScreen({onEnd}: VsScreenConfig):JSX.Element {
    return <div className="w-screen h-screen"><button className="border-4 m-2" onClick={()=>{
        onEnd();
    }}>Next</button></div>
}

interface VsScreenConfig extends ScreenConfig {
}
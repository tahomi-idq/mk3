import { GameContext } from "../../context/PlayerContext";
import { Character } from "../../entities/character";
import ScreenConfig from "../ScreenConfig";
import vsBack from "../../../assets/images/vs-back.png";
import React, { useContext, useEffect } from "react";
import VsCodes from "../vsCodes";

export default function VsScreen({onEnd}: VsScreenConfig):JSX.Element {

    const {p1, p2, player} = useContext(GameContext);

    useEffect(()=>{

        player.playVsMusic();

        setTimeout(()=>{
            onEnd();
        }, 6000)
    }, [])

    return <div className="w-screen h-screen relative">
        
        <div className="w-screen h-screen absolute z-0">
            <img src={vsBack} className="h-screen w-screen" alt="" />
        </div>
        <div className="w-screen h-screen absolute z-10 grid grid-cols-2">
            <div className="flex">
                <img className="h-[800px] mt-auto mr-auto" src={p1.photo} alt="" />
            </div>
            <div className="flex">
                <img className="h-[800px] mt-auto ml-auto" src={p2.photo} style={{transform: "scale(-1, 1)"}} alt="" />
            </div>
            
        </div>
        <div className="z-20 w-screen h-screen absolute flex">
            <div className="mt-auto ml-auto mr-auto mb-5">
                <VsCodes />
            </div>
        </div>
    </div>
}

interface VsScreenConfig extends ScreenConfig {
}
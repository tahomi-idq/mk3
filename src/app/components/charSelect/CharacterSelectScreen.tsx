import React, { useContext, useEffect, useState } from "react"
import ScreenConfig from "../ScreenConfig"
import { Character } from "../../entities/character";
import { GameContext } from "../../context/PlayerContext";
import { getCharactersList } from "../../utils/CharacterUtils"
import charBack from "../../../assets/images/vs-back.jpeg"

export default function CharacterSelectScreen({onEnd, setP1character, setP2character}:CharacterSelectConfig):JSX.Element {

    const {p1, p2, player} = useContext(GameContext);
    const [p1Lock, setP1Lock] = useState(false);
    const [p2Lock, setP2Lock] = useState(false);
    const [screenStarted, setScreenStarted] = useState(false);

    const iconWidth = 250;
    const iconHeight = 306;

    const p1KeyEvent = (event:KeyboardEvent) => {

        const upEvent = function() {
            setP1character(p1.getTop())
        }
        const leftEvent = function() {
            setP1character(p1.getLeft())
        }
        const rightEvent = function() {
            setP1character(p1.getRight())
        }
        const botEvent = function() {
            setP1character(p1.getBot())
        }

        if (event.defaultPrevented) {
            return;
          }
        
          switch (event.key) {
            case "ArrowDown":
              botEvent();
              break;
            case "ArrowUp":
              upEvent();
              break;
            case "ArrowLeft":
              leftEvent();
              break;
            case "ArrowRight":
              rightEvent();
              break;
            default:
              return;
          }
        
          event.preventDefault();
    }

    const p2KeyEvent = (event:KeyboardEvent) => {

        const upEvent = function() {
            setP2character(p2.getTop())
        }
        const leftEvent = function() {
            setP2character(p2.getLeft())
        }
        const rightEvent = function() {
            setP2character(p2.getRight())
        }
        const botEvent = function() {
            setP2character(p2.getBot())
        }

        if (event.defaultPrevented) {
            return;
          }
        
          switch (event.key.toLowerCase()) {
            case "s":
              botEvent();
              break;
            case "w":
              upEvent();
              break;
            case "a":
              leftEvent();
              break;
            case "d":
              rightEvent();
              break;
            default:
              return;
          }
        
          event.preventDefault();
    }

    function generateCard(character: Character, index:number):JSX.Element { //TODO: move to component ??

        const p1Styles = " border-green-600 ";
        const p2Styles = " border-red-700 ";
        const whiteShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"

        const [classes, setClasses] = useState("");
        const [p1Selected, setP1Selected] = useState(false);
        const [p2Selected, setP2Selected] = useState(false);

        useEffect(()=>{
            setClasses("relative box-border border-8  border-gray-800 " + (p1Selected?p1Styles:(p2Selected?p2Styles:" ")) )
            
        }, [p1Selected, p2Selected])

        useEffect(()=>{
            setP1Selected(p1 === character);
            setP2Selected(p2 === character);
        }, [p1, p2])

        useEffect(()=>{
            if ((p1Lock && p1Selected) || (p2Lock && p2Selected)) {
                setClasses(classes + " blink");
            }
        }, [p1Lock, p2Lock])

        return <div key={index} style={{
            backgroundImage: `url(${character.icon})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
        }} className={classes}>
            <div className="absolute w-full h-full">
                <div className="relative w-full h-full">
                    {p1Selected?<span style={{
                        textShadow: whiteShadow
                    }} className="absolute top-2 left-2 text-green-600">P1</span>:null}
                    {p2Selected?<span style={{
                        textShadow: whiteShadow
                    }} className="absolute bottom-2 right-2 text-red-700">P2</span>:null}
                </div>
            </div>
        </div>
    }

    useEffect(()=>{

        if (player !== null) {
            player.playChangeChar();
        }

        if( ! p1Lock) {
            window.addEventListener("keydown", p1KeyEvent)
        }

        if( ! p2Lock) {
            window.addEventListener("keydown", p2KeyEvent)
        }
        
        const selectEndEvent = function(event:KeyboardEvent) {
            if (event.defaultPrevented) {
                return;
              }
            
              switch (event.key) {
                case "Enter":
                    window.removeEventListener("keydown", p1KeyEvent);
                    setP1Lock(true);
                    break;
                case " ":
                    window.removeEventListener("keydown", p2KeyEvent);
                    setP2Lock(true);
                    break;
                default:
                  return;
              }
            
              event.preventDefault();
        }

        window.addEventListener("keydown", selectEndEvent)

        return () =>{
            window.removeEventListener("keydown", p1KeyEvent)
            window.removeEventListener("keydown", p2KeyEvent)
            window.removeEventListener("keydown", selectEndEvent)
        }
        
    }, [p1, p2]);

    useEffect(()=>{
        if (p1Lock && p2Lock) {
            setTimeout(()=>{
                onEnd();
                player.stopFirstScreenAudio();
            }, 2000)
        }

        if ( ! screenStarted) {
            
            player.playFirstScreenAudio();
            
            setScreenStarted(true);
        }

    }, [p1Lock, p2Lock])

    return <div className="w-screen h-screen relative text-white">
        <div className="w-screen h-screen absolute z-0">
            <img src={charBack} className="h-screen w-screen" alt="" />
        </div>
        <div className="absolute z-10 w-screen h-screen grid grid-cols-[1fr_minmax(1200px,_2fr)_1fr]" >
            <div className="flex">
                <img className="mt-auto ml-auto mr-auto" style={{height:"600px"}} height={600} src={p1.sprite} alt="" />
            </div>
            <div className="h-screen w-[100%] flex flex-col">
                <h1 className="text-center p-4 text-xl">SELECT YOUR FIGHTER</h1>
                <div 
                // style={{
                //     width: iconWidth * 5 + "px",
                //     height: iconHeight * 3 + "px"
                // }} 
                className={`grid grid-cols-5 grid-rows-3 m-auto w-[100%] min-h-[900px]`}> 
                    {
                        getCharactersList().map((item, index)=>{
                            return generateCard(item, index);
                        })
                    }
                </div>
                <h1 className="text-center p-4 text-xl">KOMBAT ZONE: SOUL CHAMBER</h1>
            </div>
            <div className="flex">
                <img className="mt-auto ml-auto mr-auto" height={600} style={{
                    height: "600px",
                    transform: "scale(-1, 1)"
                }} src={p2.sprite} alt="" />
            </div>
        </div>
    </div> 
}

interface CharacterSelectConfig extends ScreenConfig {
    setP1character:(character:Character)=>void,
    setP2character:(character:Character)=>void
}
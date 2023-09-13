import React, { useContext, useEffect, useState } from "react";
import dragon from "../../assets/images/dragon.jpg";
import mk from "../../assets/images/mk.jpg";
import inPhoto from "../../assets/images/in.jpg";
import three from "../../assets/images/three.jpg";
import quest from "../../assets/images/quest.jpg";
import flash from "../../assets/images/flash.jpg";
import krakoziabra from "../../assets/images/krakoziabra.jpg";
import chineze from "../../assets/images/chineze.jpg";
import samurai from "../../assets/images/samurai.jpg";
import scull from "../../assets/images/scull.jpg";
import { GameContext } from "../context/PlayerContext";

export default function VsCodes():JSX.Element {

    const {player} = useContext(GameContext);

    const images: string[] = [dragon, mk, inPhoto, three, quest, flash, krakoziabra, chineze, samurai, scull];

    const imgClasses = "w-16 h-16 border-4 border-gray-800"

    const [i1, setI1] = useState(0);
    const [i2, setI2] = useState(0);
    const [i3, setI3] = useState(0);
    const [i4, setI4] = useState(0);
    const [i5, setI5] = useState(0);
    const [i6, setI6] = useState(0);

    useEffect(()=>{
        const inputEvent = (event: KeyboardEvent)=> {
            if (event.defaultPrevented) {
                return;
              }
            
              switch (event.key) {
                case "1":
                    player.playVsCode();
                    if (i1+1 < images.length) {
                        setI1(i1 + 1);
                    }
                    break;
                case "2":
                    player.playVsCode();
                    if (i2+1 < images.length) {
                        setI2(i2 + 1);
                    }
                    break;
                case "3":
                    player.playVsCode();
                    if (i3+1 < images.length) {
                        setI3(i3 + 1);
                    }
                    break;
                case "4":
                    player.playVsCode();
                    if (i4+1 < images.length) {
                        setI4(i4 + 1);
                    }
                    break;
                case "5":
                    player.playVsCode();
                    if (i5+1 < images.length) {
                        setI5(i5 + 1);
                    }
                    break;
                case "6":
                    player.playVsCode();
                    if (i6+1 < images.length) {
                        setI6(i6 + 1);
                    }
                    break;
                default:
                  return;
              }
            
              event.preventDefault();
        }

        window.addEventListener("keydown", inputEvent);

        return ()=>{
            window.removeEventListener("keydown", inputEvent);
        }
    }, [i1, i2, i3, i4, i5, i6])

    return <div className="flex flex-row">
        <img className={imgClasses} src={images[i1]} alt="" />
        <img className={imgClasses} src={images[i2]} alt="" />
        <img className={imgClasses} src={images[i3]} alt="" />
        <img className={imgClasses} src={images[i4]} alt="" />
        <img className={imgClasses} src={images[i5]} alt="" />
        <img className={imgClasses} src={images[i6]} alt="" />
    </div>
}
import { Character } from "../entities/character";
import liuKangSprite from "../../assets/images/LiuKang-sprite.gif"
import liuKang from "../../assets/images/liukang.gif"
import kano from "../../assets/images/kano.gif"
import jax from "../../assets/images/jax.gif"
import sindel from "../../assets/images/sindel.gif"
import shangtsung from "../../assets/images/shangtsung.gif"
import cyrax from "../../assets/images/cyrax.gif"
import subzero from "../../assets/images/subzero.gif"
import smoke from "../../assets/images/smoke-anim.gif"
import stryker from "../../assets/images/stryker.gif"
import sonya from "../../assets/images/sonya.gif"
import kabal from "../../assets/images/kabal.gif"
import kunglao from "../../assets/images/kunglao.gif"
import sheeva from "../../assets/images/sheeva.gif"
import nightwolf from "../../assets/images/nightwolf.gif"
import sektor from "../../assets/images/sektor.gif"
import vsLiukang from "../../assets/images/liukang-versus.png"

import kanoSprite from "../../assets/images/kano-sprite.gif"
import jaxSprite from "../../assets/images/jax-sprite.gif"
import sindelSprite from "../../assets/images/sindel-sprite.gif"
import shangtsungSprite from "../../assets/images/shangtsung-sprite.gif"
import cyraxSprite from "../../assets/images/cyrax-sprite.gif"
import subzeroSprite from "../../assets/images/subzero-sprite.gif"
import smokeSprite from "../../assets/images/smoke-sprite.gif"
import strykerSprite from "../../assets/images/stryker-sprite.gif"
import sonyaSprite from "../../assets/images/sonya-sprite.gif"
import kabalSprite from "../../assets/images/kabal-sprite.gif"
import kunglaoSprite from "../../assets/images/kunglao-sprite.gif"
import sheevaSprite from "../../assets/images/sheeva-sprite.gif"
import nightwolfSprite from "../../assets/images/nightwolf-sprite.gif"
import sektorSprite from "../../assets/images/sektor-sprite.gif"

import kanoVs from "../../assets/images/kano-versus.png"
import jaxVs from "../../assets/images/jax-versus.png"
import sindelVs from "../../assets/images/sindel-versus.png"
import shangtsungVs from "../../assets/images/shangtsung-versus.png"
import cyraxVs from "../../assets/images/cyrax-versus.png"
import subzeroVs from "../../assets/images/subzero-versus.png"
import smokeVs from "../../assets/images/smoke-versus.png"
import strykerVs from "../../assets/images/stryker-versus.png"
import sonyaVs from "../../assets/images/sonya-versus.png"
import kabalVs from "../../assets/images/kabal-versus.png"
import kunglaoVs from "../../assets/images/kunglao-versus.png"
import sheevaVs from "../../assets/images/sheeva-versus.png"
import nightwolfVs from "../../assets/images/nightwolf-versus.png"
import sektorVs from "../../assets/images/sektor-versus.png"

const characters:Character[][] = [
    [
        new Character( shangtsung, shangtsungSprite, shangtsungVs, 0, 0),
        new Character( sindel, sindelSprite, sindelVs,  1, 0),
        new Character( jax, jaxSprite, jaxVs,  2, 0),
        new Character( kano, kanoSprite, kanoVs, 3, 0),
        new Character( liuKang, liuKangSprite, vsLiukang, 4, 0)
    ],
    [
        new Character( sonya, sonyaSprite, sonyaVs,  0, 1),
        new Character( stryker, strykerSprite, strykerVs, 1, 1),
        new Character( smoke, smokeSprite, smokeVs, 2, 1),
        new Character( subzero, subzeroSprite, subzeroVs, 3, 1),
        new Character( cyrax, cyraxSprite, cyraxVs, 4, 1)
    ],
    [
        new Character( sektor, sektorSprite, sektorVs, 0, 2),
        new Character( nightwolf, nightwolfSprite, nightwolfVs, 1, 2),
        new Character( sheeva, sheevaSprite, sheevaVs, 2, 2),
        new Character( kunglao, kunglaoSprite, kunglaoVs, 3, 2),
        new Character( kabal, kabalSprite, kabalVs, 4, 2)
    ],
]

export function getFirst():Character {
    return characters[0][0]
}

export function getSecond():Character {
    return characters[0][4]
}

export function getLeft(character:Character) {
    const {top, left} = character;

    if(left !== 0) {
        return characters[top][left - 1];
    }

    return character;
}

export function getRight(character:Character) {
    const {top, left} = character;    

    if(left < characters[0].length - 1) {
        return characters[top][left + 1];
    }

    return character;
}

export function getTop(character:Character) {
    const {top, left} = character;

    if(top !== 0) {
        return characters[top - 1][left];
    }

    return character;
}

export function getBot(character:Character) {
    const {top, left} = character;

    if(top < characters.length - 1) {
        return characters[top + 1][left];
    }

    return character;
}

export function getAllRows() {
    return characters;
}

export function getCharactersList() {
    let arr:Character[] = [];

    characters.forEach(row=>{
        row.forEach(item => arr.push(item))
    })

    return arr;
}
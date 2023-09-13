import { Character } from "../entities/character";
import wong from "../../assets/images/wong.png"

const characters:Character[][] = [
    [
        new Character("Wong", wong, "", "", 0, 0),
        new Character("Skorpion", "", "", "", 1, 0),
        new Character("Skorpion", "", "", "", 2, 0),
        new Character("Skorpion", "", "", "", 3, 0),
        new Character("Skorpion", "", "", "", 4, 0)
    ],
    [
        new Character("Sub Zero", "", "", "", 0, 1),
        new Character("Skorpion", "", "", "", 1, 1),
        new Character("Skorpion", "", "", "", 2, 1),
        new Character("Skorpion", "", "", "", 3, 1),
        new Character("Skorpion", "", "", "", 4, 1)
    ],
    [
        new Character("Sub Zero", "", "", "", 0, 2),
        new Character("Skorpion", "", "", "", 1, 2),
        new Character("Skorpion", "", "", "", 2, 2),
        new Character("Skorpion", "", "", "", 3, 2),
        new Character("Skorpion", "", "", "", 4, 2)
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
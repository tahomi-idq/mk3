import { getBot, getLeft, getRight, getTop } from "../utils/CharacterUtils";

export class Character {
    constructor(name:string, icon:string, sprite:string, photo:string, left:number, top:number) {
        this.name = name;
        this.icon = icon;
        this.sprite = sprite;
        this.photo = photo;
        this.left = left;
        this.top = top;
    }
    name;
    icon;
    sprite;
    photo;
    left;
    top;

    public getLeft() {
        return getLeft(this);
    }

    public getRight() {
        return getRight(this);
    }

    public getBot() {
        return getBot(this);
    }

    public getTop() {
        return getTop(this);
    }
}
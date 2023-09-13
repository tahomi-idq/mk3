import { getBot, getLeft, getRight, getTop } from "../utils/CharacterUtils";

export class Character {
    constructor(icon:string, sprite:string, photo:string, left:number, top:number) {
        this.icon = icon;
        this.sprite = sprite;
        this.photo = photo;
        this.left = left;
        this.top = top;
    }
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
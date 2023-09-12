export class Character {
    constructor(name:string, icon:string, sprite:string, photo:string) {
        this.name = name;
        this.icon = icon;
        this.sprite = sprite;
        this.photo = photo;
    }
    name;
    icon;
    sprite;
    photo;
}

export const characters:Character[] = [
    new Character("Sub Zero", "", "", "")
]
export class Character {
  static LAST_ID = -1;

  constructor(icon: string, sprite: string, photo: string) {
    this.icon = icon;
    this.sprite = sprite;
    this.photo = photo;
    this.id = Character.LAST_ID + 1;
    Character.LAST_ID = this.id;
  }
  icon;
  sprite;
  photo;
  id;
}

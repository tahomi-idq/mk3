import { Character } from "./character";
import liuKangSprite from "../../../assets/images/LiuKang-sprite.gif";
import liuKang from "../../../assets/images/liukang.gif";
import kano from "../../../assets/images/kano.gif";
import jax from "../../../assets/images/jax.gif";
import sindel from "../../../assets/images/sindel.gif";
import shangtsung from "../../../assets/images/shangtsung.gif";
import cyrax from "../../../assets/images/cyrax.gif";
import subzero from "../../../assets/images/subzero.gif";
import smoke from "../../../assets/images/smoke-anim.gif";
import stryker from "../../../assets/images/stryker.gif";
import sonya from "../../../assets/images/sonya.gif";
import kabal from "../../../assets/images/kabal.gif";
import kunglao from "../../../assets/images/kunglao.gif";
import sheeva from "../../../assets/images/sheeva.gif";
import nightwolf from "../../../assets/images/nightwolf.gif";
import sektor from "../../../assets/images/sektor.gif";
import vsLiukang from "../../../assets/images/liukang-versus.png";

import kanoSprite from "../../../assets/images/kano-sprite.gif";
import jaxSprite from "../../../assets/images/jax-sprite.gif";
import sindelSprite from "../../../assets/images/sindel-sprite.gif";
import shangtsungSprite from "../../../assets/images/shangtsung-sprite.gif";
import cyraxSprite from "../../../assets/images/cyrax-sprite.gif";
import subzeroSprite from "../../../assets/images/subzero-sprite.gif";
import smokeSprite from "../../../assets/images/smoke-sprite.gif";
import strykerSprite from "../../../assets/images/stryker-sprite.gif";
import sonyaSprite from "../../../assets/images/sonya-sprite.gif";
import kabalSprite from "../../../assets/images/kabal-sprite.gif";
import kunglaoSprite from "../../../assets/images/kunglao-sprite.gif";
import sheevaSprite from "../../../assets/images/sheeva-sprite.gif";
import nightwolfSprite from "../../../assets/images/nightwolf-sprite.gif";
import sektorSprite from "../../../assets/images/sektor-sprite.gif";

import kanoVs from "../../../assets/images/kano-versus.png";
import jaxVs from "../../../assets/images/jax-versus.png";
import sindelVs from "../../../assets/images/sindel-versus.png";
import shangtsungVs from "../../../assets/images/shangtsung-versus.png";
import cyraxVs from "../../../assets/images/cyrax-versus.png";
import subzeroVs from "../../../assets/images/subzero-versus.png";
import smokeVs from "../../../assets/images/smoke-versus.png";
import strykerVs from "../../../assets/images/stryker-versus.png";
import sonyaVs from "../../../assets/images/sonya-versus.png";
import kabalVs from "../../../assets/images/kabal-versus.png";
import kunglaoVs from "../../../assets/images/kunglao-versus.png";
import sheevaVs from "../../../assets/images/sheeva-versus.png";
import nightwolfVs from "../../../assets/images/nightwolf-versus.png";
import sektorVs from "../../../assets/images/sektor-versus.png";

export class CharacterGrid {
  constructor(characters: Character[], maxElementsInRow: number) {
    if (maxElementsInRow <= 0) {
      throw new Error("Must be at least 1 element in row");
    }
    this.maxElementsInRow = maxElementsInRow;
    this.packCharacters(characters);
  }

  private characters: Character[][] = [];
  private maxElementsInRow: number;

  public getCharactersList() {
    let arr: Character[] = [];

    this.characters.forEach((row) => {
      row.forEach((item) => arr.push(item));
    });

    return arr;
  }

  public getLeftToCharacter(character: Character) {
    let pos = this.findIndex(character);

    if (pos !== null) {
      if (pos.col !== 0) {
        return this.characters[pos.row][pos.col - 1];
      }
    }

    return character;
  }

  public getRightToCharacter(character: Character) {
    let pos = this.findIndex(character);

    console.log(pos);

    if (pos !== null) {
      if (pos.col < this.characters[pos.row].length - 1) {
        return this.characters[pos.row][pos.col + 1];
      }
    }

    return character;
  }

  public getTopToCharacter(character: Character) {
    let pos = this.findIndex(character);

    if (pos !== null) {
      if (pos.row !== 0) {
        return this.characters[pos.row - 1][pos.col];
      }
    }

    return character;
  }

  public getBotToCharacter(character: Character) {
    let pos = this.findIndex(character);

    if (pos !== null) {
      if (pos.row + 2 < this.characters.length) {
        // all rows, excluded two last
        return this.characters[pos.row + 1][pos.col];
      } else if (
        pos.row + 2 === this.characters.length && // is pre-last row
        this.characters[this.characters.length - 1] // is elem tab index exists in next row
      ) {
        return this.characters[pos.row + 1][pos.col];
      } else if (pos.row === this.characters.length - 1) {
        return character;
      } else {
        let lastElemIndexInLastRow =
          this.characters[this.characters.length - 1].length - 1;
        return this.characters[pos.row + 1][lastElemIndexInLastRow];
      }
    }

    return character;
  }

  public getFirst() {
    return this.characters[0][0];
  }

  public getSecond() {
    return this.characters[0][this.characters[0].length - 1];
  }

  private findIndex(character: Character): { row: number; col: number } | null {
    let pos = null;

    this.characters.forEach((listRow, index) => {
      if (listRow.includes(character)) {
        console.log(listRow.indexOf(character));

        pos = {
          row: index,
          col: listRow.indexOf(character),
        };
      }
    });

    return pos;
  }

  private packCharacters(list: Character[]) {
    let row: Character[] = [];
    let rowIndex = 0;

    list.forEach((elem) => {
      if (row.length == this.maxElementsInRow) {
        this.characters.push(row);
        rowIndex++;
        row = [];
      }

      row.push(elem);
    });

    if (row.length > 0) {
      this.characters.push(row);
    }
  }
}

export const tempCharacters: Character[] = [
  // can be loaded dynamicly, need to create module and folders for images
  new Character(shangtsung, shangtsungSprite, shangtsungVs),
  new Character(sindel, sindelSprite, sindelVs),
  new Character(jax, jaxSprite, jaxVs),
  new Character(kano, kanoSprite, kanoVs),
  new Character(liuKang, liuKangSprite, vsLiukang),
  new Character(sonya, sonyaSprite, sonyaVs),
  new Character(stryker, strykerSprite, strykerVs),
  new Character(smoke, smokeSprite, smokeVs),
  new Character(subzero, subzeroSprite, subzeroVs),
  new Character(cyrax, cyraxSprite, cyraxVs),
  new Character(sektor, sektorSprite, sektorVs),
  new Character(nightwolf, nightwolfSprite, nightwolfVs),
  new Character(sheeva, sheevaSprite, sheevaVs),
  new Character(kunglao, kunglaoSprite, kunglaoVs),
  new Character(kabal, kabalSprite, kabalVs),
];

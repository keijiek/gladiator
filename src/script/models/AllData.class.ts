import { PlayerCharacter } from "./Persons";

export class AllData {
  protected _playerCharacterArray:Array<PlayerCharacter> = [];

  constructor(){}

  get PCs():Array<PlayerCharacter> {
    return this._playerCharacterArray;
  }

  pushPC(pcs:Array<PlayerCharacter>):number {
    return this._playerCharacterArray.push(...pcs);
  }
}

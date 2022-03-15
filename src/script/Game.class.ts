import { AllData } from "./models/AllData.class";
import { PlayerCharacter, Sex } from "./models/Persons";
import { StringByLanguage } from './Types';

export class Game {
  private _allData:AllData;

  constructor(){
    this._allData = this.makeInitialData();
  }

  makeInitialData():AllData {
    const allData = new AllData();
    
    return allData;
  }

  start(){
  };
}
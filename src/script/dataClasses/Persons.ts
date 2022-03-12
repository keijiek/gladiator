import { Genital, MaleGenital, FemaleGenital } from './Genitals';
import { Sex } from './enums';
import { Money } from './Items';

class PersonBase {
  protected _name:string;
  protected _genital:Genital;
  protected _money:Money;

  constructor(name:string, sex:Sex) {
    this._name = name;
    this._genital = (sex === Sex.female) ? new FemaleGenital() : new MaleGenital();
    this._money = new Money();
  }

  get name():string {
    return this._name;
  }

  get sex():Sex {
    return this._genital.sex
  }

  get money():number {
    return this._money.money;
  }

  moneyIncDec(incDec:number):number {
    if(incDec>0) {
      return this._money.increase(incDec);
    } else if(incDec<0) {
      return this._money.decrease(incDec);
    } else {
      return this._money.money;
    }
    
  }
}


/**
 * プレイヤーキャラクター
 */
export class PlayerCharacter extends PersonBase {
  protected _isHumanPlaying:boolean;
  
  constructor(name:string, sex:Sex, isHumanPlaying:boolean=true){
    super(name, sex);
    this._isHumanPlaying = isHumanPlaying;
  }

  get isHumanPlaying():boolean {
    return this._isHumanPlaying;
  }
}

/**
 * 敵
 */
export class Enemy extends PersonBase {

  constructor(name:string, sex:Sex) {
    super(name, sex);
  }
}

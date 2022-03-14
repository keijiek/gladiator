/**
 * enum Sex 性別
 */
enum Sex {
  male,
  female
}

/**
 * 性器基底クラス
 */
class GenitalBase {
  private _sex:Sex;

  constructor(sex:Sex) {
    this._sex = sex;
  }

  get sex():Sex {
    return this._sex;
  }
}

/**
 * 女性器
 */
class FemaleGenital extends GenitalBase {
  constructor() {
    super(Sex.female);
  }
}

/**
 * 男性器
 */
class MaleGenital extends GenitalBase {
  constructor() {
    super(Sex.male);
  }
}


/**
 * Money 所持金クラス
 */
export class Money {
  private _money:number;

  constructor(initialAmount:number=0) {
    this._money = initialAmount;
  }

  /**
   * getter for this._money
   */
  get money():number {
    return this._money;
  }

  moneyString():string {
    return this._money.toLocaleString();
  }

  /**
   * 所持金が必要金額以上あるかどうかを判定
   * @param requiredAmountOfMoney 必要金額
   * @returns 必要金額が所持金以下なら true
   */
  isEnough(requiredAmountOfMoney:number):boolean {
    return requiredAmountOfMoney <= this._money;
  }

  /**
   * 
   * @param increaseOrDecrease 増減量。正の値は収入、負の値は支出
   * @returns このインスタンス
   */
  amountChange(increaseOrDecrease:number):Money {
    this._money += Math.floor(increaseOrDecrease);
    return this;
  }
}


/**
 * PersonBase 登場人物の基底クラス
 */
class PersonBase {
  protected _name:string;
  protected _genital:GenitalBase;
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

  get money():Money {
    return this._money;
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

export class Money {
  private _money:number;

  constructor() {
    this._money = 0;
  }

  get money():number {
    return this._money;
  }
  
  increase(incom:number):number {
    if(incom<0){return this._money;}
    this._money += Math.floor(incom);
    return this._money;
  }

  decrease(payment:number):number {
    if(payment<0) {return this._money;}
    this._money -= Math.floor(payment);
    return this._money;
  }
}

abstract class DivBase {
  protected _div:HTMLDivElement;

  constructor() {
    this._div = document.createElement('div');
  }

  get element():HTMLDivElement {
    return this._div;
  }

}


export class WindowBase extends DivBase {

  constructor(){
    super();
  }
}

class LabelAndValue extends DivBase {
  private _labelString:string;
  private _valueString:string;

  constructor(label:string, value:number|string) {
    super();
    this._labelString = label;
    this._valueString = String(value);
  }
  
}


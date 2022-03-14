class DivBase {
  protected _div:HTMLDivElement;

  constructor() {
    this._div = document.createElement('div');
  }

  get element():HTMLDivElement {
    return this._div;
  }
}


class WindowBase extends DivBase {

  constructor(){
    super();
  }
}

class LabelAndValue {
  private labelDiv:HTMLDivElement = new DivBase();
  private valueDiv:HTMLDivElement = new DivBase();
  constructor(label:string, value:number|string) {
    
  }
}
import { Sex } from "./enums";

export class Genital {
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
export class FemaleGenital extends Genital {
  constructor() {
    super(Sex.female);
  }
}

/**
 * 男性器
 */
export class MaleGenital extends Genital {
  constructor() {
    super(Sex.male);
  }
}

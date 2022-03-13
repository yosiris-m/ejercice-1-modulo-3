export enum PhoneType {
  PERSONAL = "personal",
  WORK = "work",
  HOME = "home",
}

export class Telephone {
  private _type: PhoneType;
  private _number: number;

  constructor(type: PhoneType, number: number) {
    this._type = type;
    this._number = number;
  }

  public get type(): PhoneType {
    return this._type;
  }

  public set type(value: PhoneType) {
    this._type = value;
  }

  public get number(): number {
    return this._number;
  }

  public set number(value: number) {
    this._number = value;
  }
}

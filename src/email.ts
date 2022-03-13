export enum EmailType {
  PERSONAL = "personal",
  WORK = "work",
}

export class Email {
  private _type: EmailType;
  private _address: string;

  constructor(type: EmailType, address: string) {
    this._type = type;
    this._address = address;
  }

  public get type(): EmailType {
    return this._type;
  }

  public set type(value: EmailType) {
    this._type = value;
  }
}

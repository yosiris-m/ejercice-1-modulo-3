export class Address {
  private _street: string;
  private _number: number;
  private _floor: number;
  private _apartment: string;
  private _postalCode: number;
  private _city: string;
  private _state: string;

  constructor(
    street: string,
    number: number,
    floor: number,
    apartment: string,
    postalCode: number,
    city: string,
    state: string
  ) {
    this._street = street;
    this._number = number;
    this._floor = floor;
    this._apartment = apartment;
    this._postalCode = postalCode;
    this._city = city;
    this._state = state;
  }

  public get state(): string {
    return this._state;
  }

  public set state(value: string) {
    this._state = value;
  }

  public get city(): string {
    return this._city;
  }

  public set city(value: string) {
    this._city = value;
  }

  public get postalCode(): number {
    return this._postalCode;
  }

  public set postalCode(value: number) {
    this._postalCode = value;
  }

  public get apartment(): string {
    return this._apartment;
  }

  public set apartment(value: string) {
    this._apartment = value;
  }

  public get floor(): number {
    return this._floor;
  }

  public set floor(value: number) {
    this._floor = value;
  }

  public get number(): number {
    return this._number;
  }

  public set number(value: number) {
    this._number = value;
  }

  public get street(): string {
    return this._street;
  }

  public set street(value: string) {
    this._street = value;
  }
}

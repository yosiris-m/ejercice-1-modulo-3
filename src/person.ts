import { Email } from "./email";
import { Address } from "./address";
import { Telephone } from "./telephone";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export enum Color {
  BLACK = "black",
  PINK = "pink",
  YELLOW = "yellow",
  GRAY = "gray",
}

export class Person {
  private _name: string;
  private _lastName: string;
  private _age: number;
  private _legalId: string;
  private _birthday: Date;
  private _favoriteColor: string;
  private _gender: Gender;
  private _emails: Email[];
  private _addresses: Address[];
  private _telephones: Telephone[];
  private _notes: string;

  constructor(
    name: string,
    lastName: string,
    age: number,
    legalId: string,
    birthday: Date,
    favoriteColor: Color,
    gender: Gender,
    emails: Email[],
    telephone: Telephone[],
    addresses: Address[],
    notes: string
  ) {
    this._name = name;
    this._lastName = lastName;
    this._age = age;
    this._legalId = legalId;
    this._birthday = birthday;
    this._favoriteColor = favoriteColor;
    this._gender = gender;
    this._emails = emails;
    this._telephones = telephone;
    this._addresses = addresses;
    this._notes = notes;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  public set legalId(legalId: string) {
    this._legalId = legalId;
  }

  public get legalId() {
    return this._legalId;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

  public get favoriteColor(): string {
    return this._favoriteColor;
  }

  public set favoriteColor(value: string) {
    this._favoriteColor = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public set gender(value: Gender) {
    this._gender = value;
  }

  public set addresses(addresses: Address[]) {
    this._addresses = addresses;
  }

  public get addresses(): Address[] {
    return this._addresses;
  }

  public addDirection(address: Address) {
    this._addresses.push(address);
  }

  public set emails(email: Email[]) {
    this._emails = email;
  }

  public get emails(): Email[] {
    return this._emails;
  }

  public addEmail(email: Email) {
    this._emails.push(email);
  }

  public set telephones(telephone: Telephone[]) {
    this._telephones = telephone;
  }

  public get telephones(): Telephone[] {
    return this._telephones;
  }

  public addTelephone(telephone: Telephone) {
    this._telephones.push(telephone);
  }

  public get notes(): string {
    return this._notes;
  }

  public set notes(value: string) {
    this._notes = value;
  }
}

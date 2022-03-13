import { Email, EmailType } from "./email";
import { Address } from "./address";
import { Color, Gender, Person } from "./person";
import { PhoneType, Telephone } from "./telephone";

function logPerson(person: Person): void {
  console.log("***********************");
  console.log(`Name: ${person.name}`);
  console.log(`Lastname: ${person.lastName}`);
  console.log(`Legal ID: ${person.legalId}`);
  console.log(`Gender: ${person.gender}`);
  console.log(`Age: ${person.age}`);
  console.log(`Birthday: ${person.birthday}`);
  console.log(`Favorite Color: ${person.favoriteColor}`);
  console.log("Addresses:");
  console.table(person.addresses);
  console.log("Emails:");
  console.table(person.emails);
  console.log("Telephones:");
  console.table(person.telephones);
  console.log(`Notes: ${person.notes}`);
  console.log("***********************");
}

const person1: Person = new Person(
  "Pablo",
  "Calzado",
  26,
  "91036015Z",
  new Date(20 - 4 - 1996),
  Color.PINK,
  Gender.MALE,
  [new Email(EmailType.PERSONAL, "pabloCalzado@gmail.com")],
  [new Telephone(PhoneType.WORK, 6025550533)],
  [new Address("Fuenlabrada", 30, 5, "D", 30768, "Alcorcón", "Madrid")],
  "Esto es una prueba datos persona 1"
);

const person2: Person = new Person(
  "Maria",
  "Garcia",
  35,
  "82085509G",
  new Date(5 - 12 - 1996),
  Color.GRAY,
  Gender.FEMALE,
  [new Email(EmailType.WORK, "maria@kiabi.com")],
  [new Telephone(PhoneType.HOME, 678574413)],
  [new Address("Palomares", 18, 1, "D", 67098, "Fuenlabrada", "Madrid")],
  "Soy la persona 2"
);

const person3: Person = new Person(
  "Paula",
  "Santos",
  35,
  "17019385Y",
  new Date(5 - 10 - 1986),
  Color.YELLOW,
  Gender.FEMALE,
  [new Email(EmailType.PERSONAL, "paula@gmail.com")],
  [new Telephone(PhoneType.PERSONAL, 973904128)],
  [new Address("Laguna", 5, 3, "D", 28769, "Mostoles", "Madrid")],
  "Soy la persona 3"
);

const agenda: Person[] = [person1, person2, person3];

//-------------------------------------------Log agenda---------------------------------------//
console.log("Antes:");
agenda.forEach((person) => logPerson(person));

//-------------------------------------------Buscar por DNI----------------------------------//
const foundPerson = agenda.find((item) => item.legalId === "91036015Z");

if (!foundPerson) {
  throw new Error("person not found");
}

//-------------------------------------------Añadir dirección--------------------------------//
const address = new Address("Paloma", 5, 4, "D", 23456, "Parla", "Madrid");
foundPerson.addDirection(address);

//-------------------------------------------Añadir email-----------------------------------//
const email = new Email(EmailType.PERSONAL, "pabloC10@gmail.com");
foundPerson.addEmail(email);

//-------------------------------------------Añadir teléfono--------------------------------//
const telephone = new Telephone(PhoneType.PERSONAL, 345678902);
foundPerson.addTelephone(telephone);

//-------------------------------------------Log agenda---------------------------------------//
console.log("Despues:");
agenda.forEach((person) => logPerson(person));

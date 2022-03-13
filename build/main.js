"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = require("./email");
var address_1 = require("./address");
var person_1 = require("./person");
var telephone_1 = require("./telephone");
function logPerson(person) {
    console.log("***********************");
    console.log("Name: ".concat(person.name));
    console.log("Lastname: ".concat(person.lastName));
    console.log("Legal ID: ".concat(person.legalId));
    console.log("Gender: ".concat(person.gender));
    console.log("Age: ".concat(person.age));
    console.log("Birthday: ".concat(person.birthday));
    console.log("Favorite Color: ".concat(person.favoriteColor));
    console.log("Addresses:");
    console.table(person.addresses);
    console.log("Emails:");
    console.table(person.emails);
    console.log("Telephones:");
    console.table(person.telephones);
    console.log("Notes: ".concat(person.notes));
    console.log("***********************");
}
var person1 = new person_1.Person("Pablo", "Calzado", 26, "91036015Z", new Date(20 - 4 - 1996), person_1.Color.PINK, person_1.Gender.MALE, [new email_1.Email(email_1.EmailType.PERSONAL, "pabloCalzado@gmail.com")], [new telephone_1.Telephone(telephone_1.PhoneType.WORK, 6025550533)], [new address_1.Address("Fuenlabrada", 30, 5, "D", 30768, "Alcorcón", "Madrid")], "Esto es una prueba datos persona 1");
var person2 = new person_1.Person("Maria", "Garcia", 35, "82085509G", new Date(5 - 12 - 1996), person_1.Color.GRAY, person_1.Gender.FEMALE, [new email_1.Email(email_1.EmailType.WORK, "maria@kiabi.com")], [new telephone_1.Telephone(telephone_1.PhoneType.HOME, 678574413)], [new address_1.Address("Palomares", 18, 1, "D", 67098, "Fuenlabrada", "Madrid")], "Soy la persona 2");
var person3 = new person_1.Person("Paula", "Santos", 35, "17019385Y", new Date(5 - 10 - 1986), person_1.Color.YELLOW, person_1.Gender.FEMALE, [new email_1.Email(email_1.EmailType.PERSONAL, "paula@gmail.com")], [new telephone_1.Telephone(telephone_1.PhoneType.PERSONAL, 973904128)], [new address_1.Address("Laguna", 5, 3, "D", 28769, "Mostoles", "Madrid")], "Soy la persona 3");
var agenda = [person1, person2, person3];
console.log("Antes:");
agenda.forEach(function (person) { return logPerson(person); });
var foundPerson = agenda.find(function (item) { return item.legalId === "91036015Z"; });
if (!foundPerson) {
    throw new Error("person not found");
}
var address = new address_1.Address("Paloma", 5, 4, "D", 23456, "Parla", "Madrid");
foundPerson.addDirection(address);
var email = new email_1.Email(email_1.EmailType.PERSONAL, "pabloC10@gmail.com");
foundPerson.addEmail(email);
var telephone = new telephone_1.Telephone(telephone_1.PhoneType.PERSONAL, 345678902);
foundPerson.addTelephone(telephone);
console.log("Despues:");
agenda.forEach(function (person) { return logPerson(person); });
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Color = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
var Color;
(function (Color) {
    Color["BLACK"] = "black";
    Color["PINK"] = "pink";
    Color["YELLOW"] = "yellow";
    Color["GRAY"] = "gray";
})(Color = exports.Color || (exports.Color = {}));
var Person = (function () {
    function Person(name, lastName, age, legalId, birthday, favoriteColor, gender, emails, telephone, addresses, notes) {
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
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "legalId", {
        get: function () {
            return this._legalId;
        },
        set: function (legalId) {
            this._legalId = legalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "favoriteColor", {
        get: function () {
            return this._favoriteColor;
        },
        set: function (value) {
            this._favoriteColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            return this._addresses;
        },
        set: function (addresses) {
            this._addresses = addresses;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.addDirection = function (address) {
        this._addresses.push(address);
    };
    Object.defineProperty(Person.prototype, "emails", {
        get: function () {
            return this._emails;
        },
        set: function (email) {
            this._emails = email;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.addEmail = function (email) {
        this._emails.push(email);
    };
    Object.defineProperty(Person.prototype, "telephones", {
        get: function () {
            return this._telephones;
        },
        set: function (telephone) {
            this._telephones = telephone;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.addTelephone = function (telephone) {
        this._telephones.push(telephone);
    };
    Object.defineProperty(Person.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map
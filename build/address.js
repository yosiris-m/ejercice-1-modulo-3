"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = (function () {
    function Address(street, number, floor, apartment, postalCode, city, state) {
        this._street = street;
        this._number = number;
        this._floor = floor;
        this._apartment = apartment;
        this._postalCode = postalCode;
        this._city = city;
        this._state = state;
    }
    Object.defineProperty(Address.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "postalCode", {
        get: function () {
            return this._postalCode;
        },
        set: function (value) {
            this._postalCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "apartment", {
        get: function () {
            return this._apartment;
        },
        set: function (value) {
            this._apartment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "floor", {
        get: function () {
            return this._floor;
        },
        set: function (value) {
            this._floor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (value) {
            this._number = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (value) {
            this._street = value;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map
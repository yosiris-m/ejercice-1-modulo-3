"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telephone = exports.PhoneType = void 0;
var PhoneType;
(function (PhoneType) {
    PhoneType["PERSONAL"] = "personal";
    PhoneType["WORK"] = "work";
    PhoneType["HOME"] = "home";
})(PhoneType = exports.PhoneType || (exports.PhoneType = {}));
var Telephone = (function () {
    function Telephone(type, number) {
        this._type = type;
        this._number = number;
    }
    Object.defineProperty(Telephone.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telephone.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (value) {
            this._number = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telephone;
}());
exports.Telephone = Telephone;
//# sourceMappingURL=telephone.js.map
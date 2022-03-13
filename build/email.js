"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = exports.EmailType = void 0;
var EmailType;
(function (EmailType) {
    EmailType["PERSONAL"] = "personal";
    EmailType["WORK"] = "work";
})(EmailType = exports.EmailType || (exports.EmailType = {}));
var Email = (function () {
    function Email(type, address) {
        this._type = type;
        this._address = address;
    }
    Object.defineProperty(Email.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    return Email;
}());
exports.Email = Email;
//# sourceMappingURL=email.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assert = void 0;
class Assert {
    static isTrue(expression, exception) {
        if (!expression) {
            throw exception;
        }
    }
    static isFalse(expression, exception) {
        if (expression) {
            throw exception;
        }
    }
    static notEmpty(value, exception) {
        if (value === null || value === undefined) {
            throw exception;
        }
        return value;
    }
}
exports.Assert = Assert;
//# sourceMappingURL=Assert.js.map
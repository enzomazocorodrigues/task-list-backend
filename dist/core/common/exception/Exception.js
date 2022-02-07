"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception extends Error {
    constructor(payload) {
        super();
        this.name = this.constructor.name;
        this.code = payload.codeDescription.code;
        this.data = payload.data;
        this.message = payload.overrideMessage || payload.codeDescription.message;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map
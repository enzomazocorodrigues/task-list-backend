"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Code_1 = require("../exception/Code");
const Exception_1 = require("../exception/Exception");
const ClassValidator_1 = require("../validation/ClassValidator");
class Entity {
    async validate() {
        const details = await ClassValidator_1.ClassValidator.validate(this);
        if (details) {
            throw new Exception_1.Exception({
                codeDescription: Code_1.Code.ENTITY_VALIDATION_ERROR,
                data: details,
            });
        }
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map
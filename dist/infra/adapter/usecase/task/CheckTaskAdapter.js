"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTaskAdapter = void 0;
const UseCaseValidatableAdapter_1 = require("../../../../core/common/adapter/UseCaseValidatableAdapter");
const class_transformer_1 = require("class-transformer");
class CheckTaskAdapter extends UseCaseValidatableAdapter_1.UseCaseValidatableAdapter {
    static async adapt(payload) {
        const adapter = (0, class_transformer_1.plainToClass)(CheckTaskAdapter, payload);
        await adapter.validate();
        return adapter;
    }
}
exports.CheckTaskAdapter = CheckTaskAdapter;
//# sourceMappingURL=CheckTaskAdapter.js.map
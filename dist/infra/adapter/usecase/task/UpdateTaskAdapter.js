"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UpdateTaskAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskAdapter = void 0;
const UseCaseValidatableAdapter_1 = require("../../../../core/common/adapter/UseCaseValidatableAdapter");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let UpdateTaskAdapter = UpdateTaskAdapter_1 = class UpdateTaskAdapter extends UseCaseValidatableAdapter_1.UseCaseValidatableAdapter {
    static async adapt(payload) {
        common_1.Logger.log(payload);
        const adapter = (0, class_transformer_1.plainToClass)(UpdateTaskAdapter_1, payload);
        await adapter.validate();
        return adapter;
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateTaskAdapter.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTaskAdapter.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateTaskAdapter.prototype, "due_date", void 0);
UpdateTaskAdapter = UpdateTaskAdapter_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], UpdateTaskAdapter);
exports.UpdateTaskAdapter = UpdateTaskAdapter;
//# sourceMappingURL=UpdateTaskAdapter.js.map
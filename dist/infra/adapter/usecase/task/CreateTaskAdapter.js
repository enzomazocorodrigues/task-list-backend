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
var CreateTaskAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskAdapter = void 0;
const UseCaseValidatableAdapter_1 = require("../../../../core/common/adapter/UseCaseValidatableAdapter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let CreateTaskAdapter = CreateTaskAdapter_1 = class CreateTaskAdapter extends UseCaseValidatableAdapter_1.UseCaseValidatableAdapter {
    static async adapt(payload) {
        const adapter = (0, class_transformer_1.plainToClass)(CreateTaskAdapter_1, payload);
        await adapter.validate();
        return adapter;
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaskAdapter.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateTaskAdapter.prototype, "due_date", void 0);
CreateTaskAdapter = CreateTaskAdapter_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], CreateTaskAdapter);
exports.CreateTaskAdapter = CreateTaskAdapter;
//# sourceMappingURL=CreateTaskAdapter.js.map
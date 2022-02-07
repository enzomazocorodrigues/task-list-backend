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
var TaskUseCaseDto_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUseCaseDto = void 0;
const class_transformer_1 = require("class-transformer");
let TaskUseCaseDto = TaskUseCaseDto_1 = class TaskUseCaseDto {
    static newFromTask(task) {
        return (0, class_transformer_1.plainToClass)(TaskUseCaseDto_1, task);
    }
    static newListFromTask(tasks) {
        return tasks.map((task) => (0, class_transformer_1.plainToClass)(TaskUseCaseDto_1, task));
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskUseCaseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskUseCaseDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], TaskUseCaseDto.prototype, "due_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], TaskUseCaseDto.prototype, "checked", void 0);
TaskUseCaseDto = TaskUseCaseDto_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], TaskUseCaseDto);
exports.TaskUseCaseDto = TaskUseCaseDto;
//# sourceMappingURL=TaskUseCaseDto.js.map
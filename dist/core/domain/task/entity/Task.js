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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const class_validator_1 = require("class-validator");
const Entity_1 = require("../../../common/entity/Entity");
const uuid_1 = require("uuid");
class Task extends Entity_1.Entity {
    constructor(payload) {
        super();
        this.id = payload.id || (0, uuid_1.v4)();
        this.title = payload.title;
        this.due_date = payload.due_date || null;
        this.checked = payload.checked || false;
    }
    static async create(payload) {
        const task = new Task(payload);
        await task.validate();
        return task;
    }
    async update(payload) {
        Object.assign(this, payload);
        await this.validate();
    }
    check() {
        this.checked = !this.checked;
    }
}
__decorate([
    (0, class_validator_1.MaxLength)(80),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MinDate)(new Date()),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Object)
], Task.prototype, "due_date", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Task.prototype, "checked", void 0);
exports.Task = Task;
//# sourceMappingURL=Task.js.map
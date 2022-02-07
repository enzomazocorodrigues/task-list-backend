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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepositoryMongo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const TaskMapperMongo_1 = require("./TaskMapperMongo");
const TaskSchemaMongo_1 = require("./TaskSchemaMongo");
let TaskRepositoryMongo = class TaskRepositoryMongo {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async find({ id }) {
        const taskModel = await this.taskModel.findOne({ id });
        const task = TaskMapperMongo_1.TaskMapper.toDomainEntity(taskModel);
        return task;
    }
    async exists({ id }) {
        const exists = await this.taskModel.exists({ id });
        return exists;
    }
    async list() {
        const tasksModel = await this.taskModel.find().exec();
        const tasks = TaskMapperMongo_1.TaskMapper.toDomainEntities(tasksModel);
        return tasks;
    }
    async remove({ id }) {
        const result = await this.taskModel.deleteOne({ id }).exec();
        return result.deletedCount > 0;
    }
    async save(task) {
        const taskModel = TaskMapperMongo_1.TaskMapper.toModel(task);
        const exists = await this.exists({ id: task.id });
        if (exists) {
            await this.taskModel.updateOne({ id: task.id }, task);
        }
        else {
            await this.taskModel.create(taskModel);
        }
    }
};
TaskRepositoryMongo = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(TaskSchemaMongo_1.TaskModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskRepositoryMongo);
exports.TaskRepositoryMongo = TaskRepositoryMongo;
//# sourceMappingURL=TaskRepositoryMongo.js.map
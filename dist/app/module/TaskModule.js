"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const TaskController_1 = require("../api/controller/TaskController");
const CheckTaskUseCase_1 = require("../../core/services/task/CheckTaskUseCase");
const TaskRepositoryMongo_1 = require("../../infra/adapter/persistence/mongo/task/TaskRepositoryMongo");
const TaskSchemaMongo_1 = require("../../infra/adapter/persistence/mongo/task/TaskSchemaMongo");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const TaskDITokens_1 = require("../../core/domain/task/di/TaskDITokens");
const CreateTaskService_1 = require("../../core/services/task/CreateTaskService");
const ListAllTaskService_1 = require("../../core/services/task/ListAllTaskService");
const RemoveTaskService_1 = require("../../core/services/task/RemoveTaskService");
const UpdateTaskService_1 = require("../../core/services/task/UpdateTaskService");
const repositoriesProviders = [
    {
        provide: TaskDITokens_1.TaskDITokens.TaskRepository,
        useClass: TaskRepositoryMongo_1.TaskRepositoryMongo,
    },
];
const useCasesProviders = [
    {
        provide: TaskDITokens_1.TaskDITokens.CheckTaskUseCase,
        useFactory: (taskRepository) => new CheckTaskUseCase_1.CheckTaskService(taskRepository),
        inject: [TaskDITokens_1.TaskDITokens.TaskRepository],
    },
    {
        provide: TaskDITokens_1.TaskDITokens.CreateTaskUseCase,
        useFactory: (taskRepository) => new CreateTaskService_1.CreateTaskService(taskRepository),
        inject: [TaskDITokens_1.TaskDITokens.TaskRepository],
    },
    {
        provide: TaskDITokens_1.TaskDITokens.ListAllTaskUseCase,
        useFactory: (taskRepository) => new ListAllTaskService_1.ListAllTaskService(taskRepository),
        inject: [TaskDITokens_1.TaskDITokens.TaskRepository],
    },
    {
        provide: TaskDITokens_1.TaskDITokens.RemoveTaskUseCase,
        useFactory: (taskRepository) => new RemoveTaskService_1.RemoveTaskService(taskRepository),
        inject: [TaskDITokens_1.TaskDITokens.TaskRepository],
    },
    {
        provide: TaskDITokens_1.TaskDITokens.UpdateTaskUseCase,
        useFactory: (taskRepository) => new UpdateTaskService_1.UpdateTaskService(taskRepository),
        inject: [TaskDITokens_1.TaskDITokens.TaskRepository],
    },
];
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: TaskSchemaMongo_1.TaskModel.name, schema: TaskSchemaMongo_1.TaskSchema }]),
        ],
        controllers: [TaskController_1.TaskController],
        providers: [...repositoriesProviders, ...useCasesProviders],
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=TaskModule.js.map
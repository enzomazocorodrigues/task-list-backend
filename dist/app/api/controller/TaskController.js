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
exports.TaskController = void 0;
const CreateTaskAdapter_1 = require("../../../infra/adapter/usecase/task/CreateTaskAdapter");
const UpdateTaskAdapter_1 = require("../../../infra/adapter/usecase/task/UpdateTaskAdapter");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CoreApiResponse_1 = require("../../../core/common/api/CoreApiResponse");
const TaskDITokens_1 = require("../../../core/domain/task/di/TaskDITokens");
const CreateTaskApiBody_1 = require("./docs/task/CreateTaskApiBody");
const TaskApiResponse_1 = require("./docs/task/TaskApiResponse");
const UpdateTaskApiBody_1 = require("./docs/task/UpdateTaskApiBody");
const RemoveTaskAdapter_1 = require("../../../infra/adapter/usecase/task/RemoveTaskAdapter");
const TaskListApiResponse_1 = require("./docs/task/TaskListApiResponse");
const ApiModelResponse_1 = require("./docs/common/ApiModelResponse");
const CheckTaskAdapter_1 = require("../../../infra/adapter/usecase/task/CheckTaskAdapter");
let TaskController = class TaskController {
    constructor(listAllTaskUseCase, checkTaskUseCase, createTaskUseCase, removeTaskUseCase, updateTaskUseCase) {
        this.listAllTaskUseCase = listAllTaskUseCase;
        this.checkTaskUseCase = checkTaskUseCase;
        this.createTaskUseCase = createTaskUseCase;
        this.removeTaskUseCase = removeTaskUseCase;
        this.updateTaskUseCase = updateTaskUseCase;
    }
    async listAllTask() {
        const tasks = await this.listAllTaskUseCase.execute();
        return CoreApiResponse_1.CoreApiResponse.success(tasks);
    }
    async createTask(createTask) {
        const createTaskAdapter = await CreateTaskAdapter_1.CreateTaskAdapter.adapt(Object.assign(Object.assign({}, createTask), { due_date: createTask.due_date ? new Date(createTask.due_date) : undefined }));
        const task = await this.createTaskUseCase.execute(createTaskAdapter);
        return CoreApiResponse_1.CoreApiResponse.success(task);
    }
    async updateTask(id, updateTask) {
        const updateTaskAdapter = await UpdateTaskAdapter_1.UpdateTaskAdapter.adapt(Object.assign(Object.assign({ id }, updateTask), { due_date: updateTask.due_date ? new Date(updateTask.due_date) : undefined }));
        const task = await this.updateTaskUseCase.execute(updateTaskAdapter);
        return CoreApiResponse_1.CoreApiResponse.success(task);
    }
    async checkTask(id) {
        const checkTaskAdapter = await CheckTaskAdapter_1.CheckTaskAdapter.adapt({ id });
        await this.checkTaskUseCase.execute(checkTaskAdapter);
        return CoreApiResponse_1.CoreApiResponse.success();
    }
    async removeTask(id) {
        const removeTaskAdapter = await RemoveTaskAdapter_1.RemoveTaskAdapter.adapt({ id });
        await this.removeTaskUseCase.execute(removeTaskAdapter);
        return CoreApiResponse_1.CoreApiResponse.success();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: TaskListApiResponse_1.TaskListApiResponse }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listAllTask", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBody)({ type: CreateTaskApiBody_1.CreateTaskApiBody }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: TaskApiResponse_1.TaskApiResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTaskApiBody_1.CreateTaskApiBody]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBody)({ type: UpdateTaskApiBody_1.UpdateTaskApiBody }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: TaskApiResponse_1.TaskApiResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTaskApiBody_1.UpdateTaskApiBody]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Put)('check/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: ApiModelResponse_1.ApiModelResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "checkTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "removeTask", null);
TaskController = __decorate([
    (0, swagger_1.ApiTags)('tasks'),
    (0, common_1.Controller)('tasks'),
    __param(0, (0, common_1.Inject)(TaskDITokens_1.TaskDITokens.ListAllTaskUseCase)),
    __param(1, (0, common_1.Inject)(TaskDITokens_1.TaskDITokens.CheckTaskUseCase)),
    __param(2, (0, common_1.Inject)(TaskDITokens_1.TaskDITokens.CreateTaskUseCase)),
    __param(3, (0, common_1.Inject)(TaskDITokens_1.TaskDITokens.RemoveTaskUseCase)),
    __param(4, (0, common_1.Inject)(TaskDITokens_1.TaskDITokens.UpdateTaskUseCase)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=TaskController.js.map
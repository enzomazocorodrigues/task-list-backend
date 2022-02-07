"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllTaskService = void 0;
const TaskUseCaseDto_1 = require("../../domain/task/usecase/dto/TaskUseCaseDto");
class ListAllTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute() {
        const tasks = await this.taskRepository.list();
        return TaskUseCaseDto_1.TaskUseCaseDto.newListFromTask(tasks);
    }
}
exports.ListAllTaskService = ListAllTaskService;
//# sourceMappingURL=ListAllTaskService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskService = void 0;
const Task_1 = require("../../domain/task/entity/Task");
const TaskUseCaseDto_1 = require("../../domain/task/usecase/dto/TaskUseCaseDto");
class CreateTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(createTask) {
        const task = await Task_1.Task.create(Object.assign({}, createTask));
        console.log(task);
        await this.taskRepository.save(task);
        return TaskUseCaseDto_1.TaskUseCaseDto.newFromTask(task);
    }
}
exports.CreateTaskService = CreateTaskService;
//# sourceMappingURL=CreateTaskService.js.map
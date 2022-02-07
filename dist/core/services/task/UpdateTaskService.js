"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskService = void 0;
const TaskUseCaseDto_1 = require("../../domain/task/usecase/dto/TaskUseCaseDto");
class UpdateTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(updateTask) {
        const task = await this.taskRepository.find({ id: updateTask.id });
        await task.update(Object.assign({}, updateTask));
        await this.taskRepository.save(task);
        return TaskUseCaseDto_1.TaskUseCaseDto.newFromTask(task);
    }
}
exports.UpdateTaskService = UpdateTaskService;
//# sourceMappingURL=UpdateTaskService.js.map
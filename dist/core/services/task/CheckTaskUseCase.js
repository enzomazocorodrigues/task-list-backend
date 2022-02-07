"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTaskService = void 0;
class CheckTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute({ id }) {
        const task = await this.taskRepository.find({ id });
        task.check();
        await this.taskRepository.save(task);
    }
}
exports.CheckTaskService = CheckTaskService;
//# sourceMappingURL=CheckTaskUseCase.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepositoryMemory = void 0;
class TaskRepositoryMemory {
    constructor() {
        this.tasks = [];
    }
    async findIndex({ id }) {
        return this.tasks.findIndex((task) => task.id == id);
    }
    async find({ id }) {
        return this.tasks.find((task) => task.id == id);
    }
    async list() {
        return this.tasks.slice();
    }
    async exists({ id }) {
        const taskIndex = await this.findIndex({ id });
        return taskIndex >= 0;
    }
    async save(task) {
        const existentTask = await this.exists({ id: task.id });
        if (existentTask) {
            const taskIndex = await this.findIndex({ id: task.id });
            this.tasks[taskIndex] = task;
        }
        else {
            this.tasks.push(task);
        }
    }
    async remove({ id }) {
        const existentTask = await this.exists({ id });
        if (existentTask) {
            const taskIndex = await this.findIndex({ id });
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.TaskRepositoryMemory = TaskRepositoryMemory;
//# sourceMappingURL=TaskRepositoryMemory.js.map
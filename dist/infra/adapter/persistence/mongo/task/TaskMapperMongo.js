"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMapper = void 0;
const Task_1 = require("../../../../../core/domain/task/entity/Task");
const TaskSchemaMongo_1 = require("./TaskSchemaMongo");
class TaskMapper {
    static toModel(domainTask) {
        const taskMongoDocument = new TaskSchemaMongo_1.TaskModel();
        taskMongoDocument.id = domainTask.id;
        taskMongoDocument.title = domainTask.title;
        taskMongoDocument.due_date = domainTask.due_date;
        taskMongoDocument.checked = domainTask.checked;
        return taskMongoDocument;
    }
    static toDomainEntity(taskModel) {
        const domainTask = new Task_1.Task({
            id: taskModel.id,
            title: taskModel.title,
            due_date: taskModel.due_date,
            checked: taskModel.checked,
        });
        return domainTask;
    }
    static toDomainEntities(tasksModel) {
        const domainTasks = tasksModel.map((taskModel) => this.toDomainEntity(taskModel));
        return domainTasks;
    }
}
exports.TaskMapper = TaskMapper;
//# sourceMappingURL=TaskMapperMongo.js.map
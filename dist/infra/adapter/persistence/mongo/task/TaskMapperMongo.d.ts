import { Task } from '@core/domain/task/entity/Task';
import { TaskModel } from './TaskSchemaMongo';
export declare class TaskMapper {
    static toModel(domainTask: Task): TaskModel;
    static toDomainEntity(taskModel: TaskModel): Task;
    static toDomainEntities(tasksModel: TaskModel[]): Task[];
}

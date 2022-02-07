import { Task } from '@core/domain/task/entity/Task';
import { TaskRepository } from '@core/domain/task/repository/TaskRepository';
import { Model } from 'mongoose';
import { TaskDocument } from './TaskSchemaMongo';
export declare class TaskRepositoryMongo implements TaskRepository {
    private readonly taskModel;
    constructor(taskModel: Model<TaskDocument>);
    find({ id }: {
        id: string;
    }): Promise<Task>;
    exists({ id }: {
        id: string;
    }): Promise<boolean>;
    list(): Promise<Task[]>;
    remove({ id }: {
        id: string;
    }): Promise<boolean>;
    save(task: Task): Promise<void>;
}

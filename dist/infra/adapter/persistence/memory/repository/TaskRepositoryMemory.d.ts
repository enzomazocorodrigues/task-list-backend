import { Task } from 'src/core/domain/task/entity/Task';
import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
export declare class TaskRepositoryMemory implements TaskRepository {
    tasks: Task[];
    private findIndex;
    find({ id }: {
        id: string;
    }): Promise<Task>;
    list(): Promise<Task[]>;
    exists({ id }: {
        id: string;
    }): Promise<boolean>;
    save(task: Task): Promise<void>;
    remove({ id }: {
        id: string;
    }): Promise<boolean>;
}

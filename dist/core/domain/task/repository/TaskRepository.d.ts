import { Task } from '../entity/Task';
export interface TaskRepository {
    list(): Promise<Task[]>;
    find(query: {
        id: string;
    }): Promise<Task>;
    exists(query: {
        id: string;
    }): Promise<boolean>;
    save(task: Task): Promise<void>;
    remove(query: {
        id: string;
    }): Promise<boolean>;
}

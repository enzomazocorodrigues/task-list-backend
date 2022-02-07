import { Task } from '../../entity/Task';
export declare class TaskUseCaseDto {
    id: string;
    title: string;
    due_date: Date;
    checked: boolean;
    static newFromTask(task: Task): TaskUseCaseDto;
    static newListFromTask(tasks: Task[]): TaskUseCaseDto[];
}

import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
import { RemoveTaskUseCase } from 'src/core/domain/task/usecase/RemoveTaskUseCase';
export declare class RemoveTaskService implements RemoveTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute({ id }: {
        id: string;
    }): Promise<void>;
}

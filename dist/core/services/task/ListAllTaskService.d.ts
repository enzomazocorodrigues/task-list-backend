import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
import { TaskUseCaseDto } from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
import { ListAllTaskUseCase } from 'src/core/domain/task/usecase/ListAllTaskUseCase';
export declare class ListAllTaskService implements ListAllTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(): Promise<TaskUseCaseDto[]>;
}

import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
import { CreateTaskPort, CreateTaskUseCase } from 'src/core/domain/task/usecase/CreateTaskUseCase';
import { TaskUseCaseDto } from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
export declare class CreateTaskService implements CreateTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(createTask: CreateTaskPort): Promise<TaskUseCaseDto>;
}

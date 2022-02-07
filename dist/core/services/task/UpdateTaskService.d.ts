import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
import { TaskUseCaseDto } from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
import { UpdateTaskPort, UpdateTaskUseCase } from 'src/core/domain/task/usecase/UpdateTaskUseCase';
export declare class UpdateTaskService implements UpdateTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(updateTask: UpdateTaskPort): Promise<TaskUseCaseDto>;
}

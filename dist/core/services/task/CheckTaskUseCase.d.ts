import { TaskRepository } from "@core/domain/task/repository/TaskRepository";
import { CheckTaskPort, CheckTaskUseCase } from "@core/domain/task/usecase/CheckTaskUseCase";
export declare class CheckTaskService implements CheckTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute({ id }: CheckTaskPort): Promise<void>;
}

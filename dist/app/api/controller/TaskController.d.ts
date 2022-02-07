import { CoreApiResponse } from '@core/common/api/CoreApiResponse';
import { CreateTaskUseCase } from 'src/core/domain/task/usecase/CreateTaskUseCase';
import { TaskUseCaseDto } from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
import { ListAllTaskUseCase } from 'src/core/domain/task/usecase/ListAllTaskUseCase';
import { RemoveTaskUseCase } from 'src/core/domain/task/usecase/RemoveTaskUseCase';
import { UpdateTaskUseCase } from 'src/core/domain/task/usecase/UpdateTaskUseCase';
import { CreateTaskApiBody } from './docs/task/CreateTaskApiBody';
import { UpdateTaskApiBody } from './docs/task/UpdateTaskApiBody';
import { CheckTaskUseCase } from '@core/domain/task/usecase/CheckTaskUseCase';
export declare class TaskController {
    private readonly listAllTaskUseCase;
    private readonly checkTaskUseCase;
    private readonly createTaskUseCase;
    private readonly removeTaskUseCase;
    private readonly updateTaskUseCase;
    constructor(listAllTaskUseCase: ListAllTaskUseCase, checkTaskUseCase: CheckTaskUseCase, createTaskUseCase: CreateTaskUseCase, removeTaskUseCase: RemoveTaskUseCase, updateTaskUseCase: UpdateTaskUseCase);
    listAllTask(): Promise<CoreApiResponse<TaskUseCaseDto[]>>;
    createTask(createTask: CreateTaskApiBody): Promise<CoreApiResponse<TaskUseCaseDto>>;
    updateTask(id: string, updateTask: UpdateTaskApiBody): Promise<CoreApiResponse<TaskUseCaseDto>>;
    checkTask(id: string): Promise<CoreApiResponse<void>>;
    removeTask(id: string): Promise<CoreApiResponse<void>>;
}

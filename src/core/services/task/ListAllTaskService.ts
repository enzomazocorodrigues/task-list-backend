import {TaskRepository} from 'src/core/domain/task/repository/TaskRepository';
import {TaskUseCaseDto} from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
import {ListAllTaskUseCase} from 'src/core/domain/task/usecase/ListAllTaskUseCase';

export class ListAllTaskService implements ListAllTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(): Promise<TaskUseCaseDto[]> {
    const tasks = await this.taskRepository.list();

    return TaskUseCaseDto.newListFromTask(tasks);
  }
}

import { Task } from 'src/core/domain/task/entity/Task';
import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
import {
  CreateTaskPort,
  CreateTaskUseCase,
} from 'src/core/domain/task/usecase/CreateTaskUseCase';
import { TaskUseCaseDto } from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';

export class CreateTaskService implements CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(createTask: CreateTaskPort): Promise<TaskUseCaseDto> {
    const task = await Task.create({ ...createTask });
    console.log(task);
    await this.taskRepository.save(task);
    return TaskUseCaseDto.newFromTask(task);
  }
}

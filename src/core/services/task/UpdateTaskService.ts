import {TaskRepository} from 'src/core/domain/task/repository/TaskRepository';
import {TaskUseCaseDto} from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
import {
  UpdateTaskPort,
  UpdateTaskUseCase,
} from 'src/core/domain/task/usecase/UpdateTaskUseCase';

export class UpdateTaskService implements UpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(updateTask: UpdateTaskPort): Promise<TaskUseCaseDto> {
    const task = await this.taskRepository.find({id: updateTask.id});

    await task.update({...updateTask});
    await this.taskRepository.save(task);

    return TaskUseCaseDto.newFromTask(task);
  }
}

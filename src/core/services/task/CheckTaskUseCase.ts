import { TaskRepository } from "@core/domain/task/repository/TaskRepository";
import { CheckTaskPort, CheckTaskUseCase } from "@core/domain/task/usecase/CheckTaskUseCase";

export class CheckTaskService implements CheckTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute({ id }: CheckTaskPort): Promise<void> {
    const task = await this.taskRepository.find({ id })
    task.check()
    await this.taskRepository.save(task)
  }
}

import { Assert } from 'src/core/common/assert/Assert';
import { Code } from 'src/core/common/exception/Code';
import { Exception } from 'src/core/common/exception/Exception';
import { TaskRepository } from 'src/core/domain/task/repository/TaskRepository';
import { RemoveTaskUseCase } from 'src/core/domain/task/usecase/RemoveTaskUseCase';

export class RemoveTaskService implements RemoveTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute({ id }: { id: string }): Promise<void> {
    Assert.isTrue(
      await this.taskRepository.remove({ id }),
      new Exception({
        codeDescription: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: 'Task was not deleted.',
      }),
    );
  }
}

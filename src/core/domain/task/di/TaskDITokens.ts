export class TaskDITokens {
  // Use Cases
  static CreateTaskUseCase = Symbol('CreateTaskUseCase');
  static ListAllTaskUseCase = Symbol('ListAllTaskUseCase');
  static RemoveTaskUseCase = Symbol('RemoveTaskUseCase');
  static UpdateTaskUseCase = Symbol('UpdateTaskUseCase');
  static CheckTaskUseCase = Symbol('CheckTaskUseCase');

  // Repositories
  static TaskRepository = Symbol('TaskRepository');
}

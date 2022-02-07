import {Task} from 'src/core/domain/task/entity/Task';
import {TaskRepository} from 'src/core/domain/task/repository/TaskRepository';

export class TaskRepositoryMemory implements TaskRepository {
  tasks: Task[] = [];

  private async findIndex({id}: {id: string}): Promise<number> {
    return this.tasks.findIndex((task) => task.id == id);
  }

  async find({id}: {id: string}): Promise<Task> {
    return this.tasks.find((task) => task.id == id);
  }

  async list(): Promise<Task[]> {
    return this.tasks.slice();
  }

  async exists({id}: {id: string}): Promise<boolean> {
    const taskIndex = await this.findIndex({id});
    return taskIndex >= 0;
  }

  async save(task: Task): Promise<void> {
    const existentTask = await this.exists({id: task.id});
    if (existentTask) {
      const taskIndex = await this.findIndex({id: task.id});
      this.tasks[taskIndex] = task;
    } else {
      this.tasks.push(task);
    }
  }

  async remove({id}: {id: string}): Promise<boolean> {
    const existentTask = await this.exists({id});
    if (existentTask) {
      const taskIndex = await this.findIndex({id});
      this.tasks.splice(taskIndex, 1);
      return true;
    } else {
      return false;
    }
  }
}

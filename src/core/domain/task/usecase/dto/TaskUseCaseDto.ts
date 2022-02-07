import {Exclude, Expose, plainToClass} from 'class-transformer';
import {Task} from '../../entity/Task';

@Exclude()
export class TaskUseCaseDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  due_date: Date;

  @Expose()
  checked: boolean;

  static newFromTask(task: Task): TaskUseCaseDto {
    return plainToClass(TaskUseCaseDto, task);
  }

  static newListFromTask(tasks: Task[]): TaskUseCaseDto[] {
    return tasks.map((task) => plainToClass(TaskUseCaseDto, task));
  }
}

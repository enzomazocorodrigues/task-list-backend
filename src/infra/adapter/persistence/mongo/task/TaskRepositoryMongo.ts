import {Task} from '@core/domain/task/entity/Task';
import {TaskRepository} from '@core/domain/task/repository/TaskRepository';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {TaskMapper} from './TaskMapperMongo';
import {TaskDocument, TaskModel} from './TaskSchemaMongo';

export class TaskRepositoryMongo implements TaskRepository {
  constructor(
    @InjectModel(TaskModel.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  async find({id}: {id: string}): Promise<Task> {
    const taskModel: TaskModel = await this.taskModel.findOne({id});
    const task: Task = TaskMapper.toDomainEntity(taskModel);
    return task;
  }

  async exists({id}: {id: string}): Promise<boolean> {
    const exists: boolean = await this.taskModel.exists({id});
    return exists;
  }

  async list(): Promise<Task[]> {
    const tasksModel: TaskModel[] = await this.taskModel.find().exec();
    const tasks: Task[] = TaskMapper.toDomainEntities(tasksModel);
    return tasks;
  }

  async remove({id}: {id: string}): Promise<boolean> {
    const result = await this.taskModel.deleteOne({id}).exec();
    return result.deletedCount > 0;
  }

  async save(task: Task): Promise<void> {
    const taskModel = TaskMapper.toModel(task);
    const exists = await this.exists({id: task.id});

    if (exists) {
      await this.taskModel.updateOne({id: task.id}, task);
    } else {
      await this.taskModel.create(taskModel);
    }
  }
}

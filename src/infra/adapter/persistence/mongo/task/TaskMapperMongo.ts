import {Task} from '@core/domain/task/entity/Task';
import {TaskModel} from './TaskSchemaMongo';

export class TaskMapper {
  static toModel(domainTask: Task): TaskModel {
    const taskMongoDocument = new TaskModel();

    taskMongoDocument.id = domainTask.id;
    taskMongoDocument.title = domainTask.title;
    taskMongoDocument.due_date = domainTask.due_date;
    taskMongoDocument.checked = domainTask.checked;

    return taskMongoDocument;
  }

  static toDomainEntity(taskModel: TaskModel): Task {
    const domainTask = new Task({
      id: taskModel.id,
      title: taskModel.title,
      due_date: taskModel.due_date,
      checked: taskModel.checked,
    });

    return domainTask;
  }

  static toDomainEntities(tasksModel: TaskModel[]): Task[] {
    const domainTasks = tasksModel.map((taskModel) =>
      this.toDomainEntity(taskModel),
    );

    return domainTasks;
  }
}

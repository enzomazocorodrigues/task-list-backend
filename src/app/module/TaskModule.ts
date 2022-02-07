import { TaskController } from '@app/api/controller/TaskController';
import { CheckTaskService } from '@core/services/task/CheckTaskUseCase';
import { TaskRepositoryMongo } from '@infra/adapter/persistence/mongo/task/TaskRepositoryMongo';
import {
  TaskModel,
  TaskSchema,
} from '@infra/adapter/persistence/mongo/task/TaskSchemaMongo';
import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskDITokens } from 'src/core/domain/task/di/TaskDITokens';
import { CreateTaskService } from 'src/core/services/task/CreateTaskService';
import { ListAllTaskService } from 'src/core/services/task/ListAllTaskService';
import { RemoveTaskService } from 'src/core/services/task/RemoveTaskService';
import { UpdateTaskService } from 'src/core/services/task/UpdateTaskService';
// import { TaskRepositoryMemory } from 'src/infra/adapter/persistence/memory/repository/TaskRepositoryMemory';

const repositoriesProviders: Provider[] = [
  // {
  //   provide: TaskDITokens.TaskRepository,
  //   useClass: TaskRepositoryMemory,
  // },
  {
    provide: TaskDITokens.TaskRepository,
    useClass: TaskRepositoryMongo,
  },
];

const useCasesProviders: Provider[] = [
  {
    provide: TaskDITokens.CheckTaskUseCase,
    useFactory: (taskRepository) => new CheckTaskService(taskRepository),
    inject: [TaskDITokens.TaskRepository],
  },
  {
    provide: TaskDITokens.CreateTaskUseCase,
    useFactory: (taskRepository) => new CreateTaskService(taskRepository),
    inject: [TaskDITokens.TaskRepository],
  },
  {
    provide: TaskDITokens.ListAllTaskUseCase,
    useFactory: (taskRepository) => new ListAllTaskService(taskRepository),
    inject: [TaskDITokens.TaskRepository],
  },
  {
    provide: TaskDITokens.RemoveTaskUseCase,
    useFactory: (taskRepository) => new RemoveTaskService(taskRepository),
    inject: [TaskDITokens.TaskRepository],
  },
  {
    provide: TaskDITokens.UpdateTaskUseCase,
    useFactory: (taskRepository) => new UpdateTaskService(taskRepository),
    inject: [TaskDITokens.TaskRepository],
  },
];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TaskModel.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [...repositoriesProviders, ...useCasesProviders],
})
export class TaskModule { }

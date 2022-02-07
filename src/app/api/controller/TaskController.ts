import { CreateTaskAdapter } from '@infra/adapter/usecase/task/CreateTaskAdapter';
import { UpdateTaskAdapter } from '@infra/adapter/usecase/task/UpdateTaskAdapter';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoreApiResponse } from '@core/common/api/CoreApiResponse';
import { TaskDITokens } from 'src/core/domain/task/di/TaskDITokens';
import { CreateTaskUseCase } from 'src/core/domain/task/usecase/CreateTaskUseCase';
import { TaskUseCaseDto } from 'src/core/domain/task/usecase/dto/TaskUseCaseDto';
import { ListAllTaskUseCase } from 'src/core/domain/task/usecase/ListAllTaskUseCase';
import { RemoveTaskUseCase } from 'src/core/domain/task/usecase/RemoveTaskUseCase';
import { UpdateTaskUseCase } from 'src/core/domain/task/usecase/UpdateTaskUseCase';
import { CreateTaskApiBody } from './docs/task/CreateTaskApiBody';
import { TaskApiResponse } from './docs/task/TaskApiResponse';
import { UpdateTaskApiBody } from './docs/task/UpdateTaskApiBody';
import { RemoveTaskAdapter } from '@infra/adapter/usecase/task/RemoveTaskAdapter';
import { TaskListApiResponse } from './docs/task/TaskListApiResponse';
import { ApiModelResponse } from './docs/common/ApiModelResponse';
import { CheckTaskUseCase } from '@core/domain/task/usecase/CheckTaskUseCase';
import { CheckTaskAdapter } from '@infra/adapter/usecase/task/CheckTaskAdapter';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(
    @Inject(TaskDITokens.ListAllTaskUseCase)
    private readonly listAllTaskUseCase: ListAllTaskUseCase,

    @Inject(TaskDITokens.CheckTaskUseCase)
    private readonly checkTaskUseCase: CheckTaskUseCase,

    @Inject(TaskDITokens.CreateTaskUseCase)
    private readonly createTaskUseCase: CreateTaskUseCase,

    @Inject(TaskDITokens.RemoveTaskUseCase)
    private readonly removeTaskUseCase: RemoveTaskUseCase,

    @Inject(TaskDITokens.UpdateTaskUseCase)
    private readonly updateTaskUseCase: UpdateTaskUseCase,
  ) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: TaskListApiResponse })
  async listAllTask(): Promise<CoreApiResponse<TaskUseCaseDto[]>> {
    const tasks = await this.listAllTaskUseCase.execute();

    return CoreApiResponse.success(tasks);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: CreateTaskApiBody })
  @ApiResponse({ status: HttpStatus.OK, type: TaskApiResponse })
  async createTask(
    @Body() createTask: CreateTaskApiBody,
  ): Promise<CoreApiResponse<TaskUseCaseDto>> {
    const createTaskAdapter = await CreateTaskAdapter.adapt({
      ...createTask,
      due_date: createTask.due_date ? new Date(createTask.due_date) : undefined,
    });

    const task = await this.createTaskUseCase.execute(createTaskAdapter);

    return CoreApiResponse.success(task);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateTaskApiBody })
  @ApiResponse({ status: HttpStatus.OK, type: TaskApiResponse })
  async updateTask(
    @Param('id') id: string,
    @Body() updateTask: UpdateTaskApiBody,
  ): Promise<CoreApiResponse<TaskUseCaseDto>> {
    const updateTaskAdapter = await UpdateTaskAdapter.adapt({
      id,
      ...updateTask,
      due_date: updateTask.due_date ? new Date(updateTask.due_date) : undefined,
    });

    const task = await this.updateTaskUseCase.execute(updateTaskAdapter);

    return CoreApiResponse.success(task);
  }

  @Put('check/:id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: ApiModelResponse })
  async checkTask(@Param('id') id: string): Promise<CoreApiResponse<void>> {
    const checkTaskAdapter = await CheckTaskAdapter.adapt({ id })
    await this.checkTaskUseCase.execute(checkTaskAdapter)

    return CoreApiResponse.success()
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK })
  async removeTask(@Param('id') id: string): Promise<CoreApiResponse<void>> {
    const removeTaskAdapter = await RemoveTaskAdapter.adapt({ id });
    await this.removeTaskUseCase.execute(removeTaskAdapter);

    return CoreApiResponse.success();
  }
}

import {ApiProperty} from '@nestjs/swagger';
import {ApiModelResponse} from '../common/ApiModelResponse';
import {TaskApiModel} from './TaskApiModel';

export class TaskListApiResponse extends ApiModelResponse {
  @ApiProperty({type: TaskApiModel, isArray: true})
  public data: TaskApiModel[];
}

import {ApiProperty} from '@nestjs/swagger';
import {ApiModelResponse} from '../common/ApiModelResponse';
import {TaskApiModel} from './TaskApiModel';

export class TaskApiResponse extends ApiModelResponse {
  @ApiProperty({type: TaskApiModel})
  public data: TaskApiModel;
}

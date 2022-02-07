import {ApiProperty} from '@nestjs/swagger';

export class TaskApiModel {
  @ApiProperty({type: 'string'})
  id: string;

  @ApiProperty({type: 'string'})
  title: string;

  @ApiProperty({type: 'string'})
  due_date: string;

  @ApiProperty({type: 'boolean'})
  checked: boolean;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskApiBody {
  @ApiProperty({ type: 'string' })
  title: string;

  @ApiProperty({ type: 'string', required: false, default: null })
  due_date: string;
}

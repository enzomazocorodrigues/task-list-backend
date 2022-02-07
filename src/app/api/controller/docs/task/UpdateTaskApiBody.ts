import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskApiBody {
  @ApiProperty({ type: 'string', required: false })
  title?: string;

  @ApiProperty({ type: 'string', required: false })
  due_date?: string;

  @ApiProperty({ type: 'boolean', required: false })
  checked?: boolean;
}

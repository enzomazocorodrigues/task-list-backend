import { UseCaseValidatableAdapter } from '@core/common/adapter/UseCaseValidatableAdapter';
import { UpdateTaskPort } from '@core/domain/task/usecase/UpdateTaskUseCase';
import { Logger } from '@nestjs/common';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

@Exclude()
export class UpdateTaskAdapter
  extends UseCaseValidatableAdapter
  implements UpdateTaskPort {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @IsOptional()
  title?: string;

  @Expose()
  @IsDate()
  @IsOptional()
  due_date?: Date;

  static async adapt(payload: UpdateTaskPort): Promise<UpdateTaskAdapter> {
    Logger.log(payload)
    const adapter: UpdateTaskAdapter = plainToClass(UpdateTaskAdapter, payload);
    await adapter.validate();

    return adapter;
  }
}

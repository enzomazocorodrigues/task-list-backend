import { UseCaseValidatableAdapter } from '@core/common/adapter/UseCaseValidatableAdapter';
import { CreateTaskPort } from '@core/domain/task/usecase/CreateTaskUseCase';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

@Exclude()
export class CreateTaskAdapter
  extends UseCaseValidatableAdapter
  implements CreateTaskPort {
  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsDate()
  @IsOptional()
  due_date?: Date;

  static async adapt(payload: CreateTaskPort): Promise<CreateTaskAdapter> {
    const adapter: CreateTaskAdapter = plainToClass(CreateTaskAdapter, payload);
    await adapter.validate();

    return adapter;
  }
}

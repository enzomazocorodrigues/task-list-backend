import {UseCaseValidatableAdapter} from '@core/common/adapter/UseCaseValidatableAdapter';
import {RemoveTaskPort} from '@core/domain/task/usecase/RemoveTaskUseCase';
import {Exclude, Expose, plainToClass} from 'class-transformer';
import {IsString} from 'class-validator';

@Exclude()
export class RemoveTaskAdapter
  extends UseCaseValidatableAdapter
  implements RemoveTaskPort
{
  @Expose()
  @IsString()
  id: string;

  static async adapt(payload: RemoveTaskPort): Promise<RemoveTaskAdapter> {
    const adapter: RemoveTaskAdapter = plainToClass(RemoveTaskAdapter, payload);
    await adapter.validate();

    return adapter;
  }
}

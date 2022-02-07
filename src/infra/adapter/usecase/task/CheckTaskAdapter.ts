import { UseCaseValidatableAdapter } from "@core/common/adapter/UseCaseValidatableAdapter";
import { CheckTaskPort } from "@core/domain/task/usecase/CheckTaskUseCase";
import { plainToClass } from "class-transformer";

export class CheckTaskAdapter extends UseCaseValidatableAdapter implements CheckTaskPort {
  id?: string;

  static async adapt(payload: CheckTaskPort): Promise<CheckTaskAdapter> {
    const adapter: CheckTaskAdapter = plainToClass(CheckTaskAdapter, payload);
    await adapter.validate();

    return adapter;
  }
}

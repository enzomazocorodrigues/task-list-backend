import { UseCaseValidatableAdapter } from "@core/common/adapter/UseCaseValidatableAdapter";
import { CheckTaskPort } from "@core/domain/task/usecase/CheckTaskUseCase";
export declare class CheckTaskAdapter extends UseCaseValidatableAdapter implements CheckTaskPort {
    id?: string;
    static adapt(payload: CheckTaskPort): Promise<CheckTaskAdapter>;
}

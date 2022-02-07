import { UseCaseValidatableAdapter } from '@core/common/adapter/UseCaseValidatableAdapter';
import { RemoveTaskPort } from '@core/domain/task/usecase/RemoveTaskUseCase';
export declare class RemoveTaskAdapter extends UseCaseValidatableAdapter implements RemoveTaskPort {
    id: string;
    static adapt(payload: RemoveTaskPort): Promise<RemoveTaskAdapter>;
}

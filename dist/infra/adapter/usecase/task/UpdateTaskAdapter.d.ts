import { UseCaseValidatableAdapter } from '@core/common/adapter/UseCaseValidatableAdapter';
import { UpdateTaskPort } from '@core/domain/task/usecase/UpdateTaskUseCase';
export declare class UpdateTaskAdapter extends UseCaseValidatableAdapter implements UpdateTaskPort {
    id: string;
    title?: string;
    due_date?: Date;
    static adapt(payload: UpdateTaskPort): Promise<UpdateTaskAdapter>;
}

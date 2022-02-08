import { UseCaseValidatableAdapter } from '@core/common/adapter/UseCaseValidatableAdapter';
import { CreateTaskPort } from '@core/domain/task/usecase/CreateTaskUseCase';
export declare class CreateTaskAdapter extends UseCaseValidatableAdapter implements CreateTaskPort {
    title: string;
    due_date?: Date;
    static adapt(payload: CreateTaskPort): Promise<CreateTaskAdapter>;
}

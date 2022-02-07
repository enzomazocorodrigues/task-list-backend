import { UseCase } from 'src/core/common/usecase/UseCase';
export interface RemoveTaskPort {
    id: string;
}
export interface RemoveTaskUseCase extends UseCase<RemoveTaskPort, void> {
}

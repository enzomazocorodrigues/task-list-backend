import { UseCase } from 'src/core/common/usecase/UseCase';
import { TaskUseCaseDto } from './dto/TaskUseCaseDto';
export interface UpdateTaskPort {
    id: string;
    title?: string;
    due_date?: Date;
}
export interface UpdateTaskUseCase extends UseCase<UpdateTaskPort, TaskUseCaseDto> {
}

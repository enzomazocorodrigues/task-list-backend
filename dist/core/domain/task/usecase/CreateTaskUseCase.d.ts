import { UseCase } from 'src/core/common/usecase/UseCase';
import { TaskUseCaseDto } from './dto/TaskUseCaseDto';
export interface CreateTaskPort {
    title: string;
    due_date?: Date;
}
export interface CreateTaskUseCase extends UseCase<CreateTaskPort, TaskUseCaseDto> {
}

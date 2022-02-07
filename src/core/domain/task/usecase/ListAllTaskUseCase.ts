import {UseCase} from 'src/core/common/usecase/UseCase';
import {TaskUseCaseDto} from './dto/TaskUseCaseDto';

export interface ListAllTaskUseCase
  extends UseCase<undefined, TaskUseCaseDto[]> {}

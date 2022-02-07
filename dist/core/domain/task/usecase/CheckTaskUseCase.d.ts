import { UseCase } from "@core/common/usecase/UseCase";
export interface CheckTaskPort {
    id?: string;
}
export interface CheckTaskUseCase extends UseCase<CheckTaskPort, void> {
}

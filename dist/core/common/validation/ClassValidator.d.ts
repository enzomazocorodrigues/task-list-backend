import { Optional } from '@core/common/type/CommonTypes';
export declare type ClassValidationDetails = {
    context: string;
    errors: ClassValidationErrors[];
};
export declare type ClassValidationErrors = {
    property: string;
    message: string[];
};
export declare class ClassValidator {
    static validate<TTarget extends object>(target: TTarget, context?: string): Promise<Optional<ClassValidationDetails>>;
}

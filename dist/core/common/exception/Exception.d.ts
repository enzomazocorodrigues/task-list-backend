import { CodeDescription } from '@core/common/exception/Code';
import { Optional } from '@core/common/type/CommonTypes';
export declare type CreateExceptionPayload<TData> = {
    codeDescription: CodeDescription;
    overrideMessage?: string;
    data?: TData;
};
export declare class Exception<TData> extends Error {
    readonly code: number;
    readonly data: Optional<TData>;
    constructor(payload: CreateExceptionPayload<TData>);
}

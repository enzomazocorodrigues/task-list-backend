import { Nullable } from '@core/common/type/CommonTypes';
export declare class CoreApiResponse<TData> {
    readonly code: number;
    readonly message: string;
    readonly timestamp: number;
    readonly data: Nullable<TData>;
    private constructor();
    static success<TData>(data?: TData, message?: string): CoreApiResponse<TData>;
    static error<TData>(code?: number, message?: string, data?: TData): CoreApiResponse<TData>;
}

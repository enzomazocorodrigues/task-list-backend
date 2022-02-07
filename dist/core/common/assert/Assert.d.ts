import { Nullable, Optional } from '../type/CommonTypes';
export declare class Assert {
    static isTrue(expression: boolean, exception: Error): void;
    static isFalse(expression: boolean, exception: Error): void;
    static notEmpty<T>(value: Optional<Nullable<T>>, exception: Error): T;
}

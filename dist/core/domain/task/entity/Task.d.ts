import { Entity } from 'src/core/common/entity/Entity';
import { Nullable } from 'src/core/common/type/CommonTypes';
export declare type CreateTaskPayload = {
    id?: string;
    title: string;
    due_date?: Date;
    checked?: boolean;
};
export declare type UpdateTaskPayload = {
    title?: string;
    due_date?: Date;
};
export declare class Task extends Entity<string> {
    title: string;
    due_date: Nullable<Date>;
    checked: boolean;
    constructor(payload: CreateTaskPayload);
    static create(payload: CreateTaskPayload): Promise<Task>;
    update(payload: UpdateTaskPayload): Promise<void>;
    check(): void;
}

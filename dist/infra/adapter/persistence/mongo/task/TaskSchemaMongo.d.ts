import { Document } from 'mongoose';
export declare type TaskDocument = TaskModel & Document;
export declare class TaskModel {
    id: string;
    title: string;
    due_date: Date;
    checked: boolean;
}
export declare const TaskSchema: import("mongoose").Schema<Document<TaskModel, any, any>, import("mongoose").Model<Document<TaskModel, any, any>, any, any, any>, any, any>;

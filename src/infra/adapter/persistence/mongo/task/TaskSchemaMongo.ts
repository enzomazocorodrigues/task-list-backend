import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type TaskDocument = TaskModel & Document;

@Schema({collection: 'tasks'})
export class TaskModel {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  due_date: Date;

  @Prop()
  checked: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);

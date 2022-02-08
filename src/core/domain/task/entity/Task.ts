import { IsBoolean, IsDate, IsOptional, IsString, MaxLength, MinDate } from 'class-validator';
import { Entity } from 'src/core/common/entity/Entity';
import { Nullable } from 'src/core/common/type/CommonTypes';
import { v4 } from 'uuid';

export type CreateTaskPayload = {
  id?: string;
  title: string;
  due_date?: Date;
  checked?: boolean;
};

export type UpdateTaskPayload = {
  title?: string,
  due_date?: Date
};

export class Task extends Entity<string> {
  @MaxLength(80)
  @IsString()
  title: string;

  @MinDate(new Date(), { message: 'minimal due_date must be today' })
  @IsDate()
  @IsOptional()
  due_date: Nullable<Date>;

  @IsBoolean()
  checked: boolean;

  constructor(payload: CreateTaskPayload) {
    super();

    this.id = payload.id || v4();
    this.title = payload.title;
    this.due_date = payload.due_date || null;
    this.checked = payload.checked || false;
  }

  static async create(payload: CreateTaskPayload): Promise<Task> {
    const task = new Task(payload);
    await task.validate();
    return task;
  }

  async update(payload: UpdateTaskPayload): Promise<void> {
    Object.assign(this, payload);
    await this.validate();
  }

  check(): void {
    this.checked = !this.checked
  }
}

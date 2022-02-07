import {CodeDescription} from '@core/common/exception/Code';
import {Optional} from '@core/common/type/CommonTypes';

export type CreateExceptionPayload<TData> = {
  codeDescription: CodeDescription;
  overrideMessage?: string;
  data?: TData;
};

export class Exception<TData> extends Error {
  public readonly code: number;

  public readonly data: Optional<TData>;

  constructor(payload: CreateExceptionPayload<TData>) {
    super();

    this.name = this.constructor.name;
    this.code = payload.codeDescription.code;
    this.data = payload.data;
    this.message = payload.overrideMessage || payload.codeDescription.message;

    Error.captureStackTrace(this, this.constructor);
  }
}

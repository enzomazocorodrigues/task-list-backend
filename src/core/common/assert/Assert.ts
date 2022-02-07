import {Nullable, Optional} from '../type/CommonTypes';

export class Assert {
  static isTrue(expression: boolean, exception: Error): void {
    if (!expression) {
      throw exception;
    }
  }

  static isFalse(expression: boolean, exception: Error): void {
    if (expression) {
      throw exception;
    }
  }

  static notEmpty<T>(value: Optional<Nullable<T>>, exception: Error): T {
    if (value === null || value === undefined) {
      throw exception;
    }
    return value;
  }
}

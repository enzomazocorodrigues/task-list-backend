import {Code} from '../exception/Code';
import {Exception} from '../exception/Exception';
import {Optional} from '../type/CommonTypes';
import {
  ClassValidationDetails,
  ClassValidator,
} from '../validation/ClassValidator';

export abstract class Entity<TId extends string | number> {
  id: TId;

  async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> =
      await ClassValidator.validate(this);
    if (details) {
      throw new Exception({
        codeDescription: Code.ENTITY_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}

import {Module} from '@nestjs/common';
import {InfraModule} from './InfraModule';
import {TaskModule} from './TaskModule';

@Module({
  imports: [InfraModule, TaskModule],
})
export class RootModule {}

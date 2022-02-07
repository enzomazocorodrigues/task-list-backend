import {HttpExceptionFilter} from '@app/api/exception-filter/HttpExceptionFilter';
import {MongoConfig} from '@infra/config/MongoConfig';
import {Global, Module, Provider} from '@nestjs/common';
import {APP_FILTER} from '@nestjs/core';
import {MongooseModule} from '@nestjs/mongoose';

const providers: Provider[] = [
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
];

@Global()
@Module({
  imports: [MongooseModule.forRoot(MongoConfig.uri)],
  providers: [...providers],
})
export class InfraModule {}

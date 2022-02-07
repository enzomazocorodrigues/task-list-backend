import { RootModule } from '@app/module/RootModule';
import { ServerConfig } from '@infra/config/ServerConfig';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class ServerApplication {
  private readonly host: string = ServerConfig.HOST;

  private readonly port: number = ServerConfig.PORT;

  public async run(): Promise<void> {
    const app: NestExpressApplication =
      await NestFactory.create<NestExpressApplication>(RootModule, { cors: { origin: "*" } });

    this.buildAPIDocumentation(app);
    this.log();

    await app.listen(this.port, this.host);
  }

  private buildAPIDocumentation(app: NestExpressApplication): void {
    const title = 'Task API';
    const description = 'An CleanArch-based task API';
    const version = '0.0.0';

    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
  }

  private log(): void {
    Logger.log(
      `Server running on port ${this.port}...`,
      ServerApplication.name,
    );
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}

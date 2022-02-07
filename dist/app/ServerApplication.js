"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApplication = void 0;
const RootModule_1 = require("./module/RootModule");
const ServerConfig_1 = require("../infra/config/ServerConfig");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
class ServerApplication {
    constructor() {
        this.host = ServerConfig_1.ServerConfig.HOST;
        this.port = ServerConfig_1.ServerConfig.PORT;
    }
    async run() {
        const app = await core_1.NestFactory.create(RootModule_1.RootModule, { cors: { origin: "*" } });
        this.buildAPIDocumentation(app);
        this.log();
        await app.listen(this.port, this.host);
    }
    buildAPIDocumentation(app) {
        const title = 'Task API';
        const description = 'An CleanArch-based task API';
        const version = '0.0.0';
        const config = new swagger_1.DocumentBuilder()
            .setTitle(title)
            .setDescription(description)
            .setVersion(version)
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    log() {
        common_1.Logger.log(`Server running on port ${this.port}...`, ServerApplication.name);
    }
    static new() {
        return new ServerApplication();
    }
}
exports.ServerApplication = ServerApplication;
//# sourceMappingURL=ServerApplication.js.map
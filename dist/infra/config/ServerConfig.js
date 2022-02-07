"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = void 0;
class ServerConfig {
}
exports.ServerConfig = ServerConfig;
ServerConfig.HOST = process.env.HOST || 'localhost';
ServerConfig.PORT = parseInt(process.env.PORT) || 3333;
//# sourceMappingURL=ServerConfig.js.map
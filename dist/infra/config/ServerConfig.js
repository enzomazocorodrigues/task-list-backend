"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = void 0;
class ServerConfig {
}
exports.ServerConfig = ServerConfig;
ServerConfig.HOST = process.env.HOST || '0.0.0.0';
ServerConfig.PORT = parseInt(process.env.PORT) || 5000;
//# sourceMappingURL=ServerConfig.js.map
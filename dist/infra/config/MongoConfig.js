"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConfig = void 0;
class MongoConfig {
    static get uri() {
        return `mongodb+srv://admin:${MongoConfig.password}@cluster0.b1ckh.mongodb.net/${MongoConfig.database}?retryWrites=true&w=majority`;
    }
}
exports.MongoConfig = MongoConfig;
MongoConfig.database = 'nest-task';
MongoConfig.password = 'enzo1234';
//# sourceMappingURL=MongoConfig.js.map
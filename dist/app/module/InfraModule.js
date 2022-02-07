"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraModule = void 0;
const HttpExceptionFilter_1 = require("../api/exception-filter/HttpExceptionFilter");
const MongoConfig_1 = require("../../infra/config/MongoConfig");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const providers = [
    {
        provide: core_1.APP_FILTER,
        useClass: HttpExceptionFilter_1.HttpExceptionFilter,
    },
];
let InfraModule = class InfraModule {
};
InfraModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot(MongoConfig_1.MongoConfig.uri)],
        providers: [...providers],
    })
], InfraModule);
exports.InfraModule = InfraModule;
//# sourceMappingURL=InfraModule.js.map
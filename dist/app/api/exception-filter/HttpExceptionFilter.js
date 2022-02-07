"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const CoreApiResponse_1 = require("../../../core/common/api/CoreApiResponse");
const Code_1 = require("../../../core/common/exception/Code");
const Exception_1 = require("../../../core/common/exception/Exception");
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(error, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        let errorResponse = CoreApiResponse_1.CoreApiResponse.error(Code_1.Code.INTERNAL_ERROR.code, error.message);
        errorResponse = this.handleNestError(error, errorResponse);
        errorResponse = this.handleCoreException(error, errorResponse);
        const message = `Method: ${request.method}, ` +
            `Path: ${request.path}, ` +
            `Error: ${errorResponse.message}`;
        common_1.Logger.error(message);
        response.json(errorResponse);
    }
    handleNestError(error, errorResponse) {
        if (error instanceof common_1.HttpException) {
            errorResponse = CoreApiResponse_1.CoreApiResponse.error(error.getStatus(), error.message, null);
        }
        if (error instanceof common_1.UnauthorizedException) {
            errorResponse = CoreApiResponse_1.CoreApiResponse.error(Code_1.Code.UNAUTHORIZED_ERROR.code, Code_1.Code.UNAUTHORIZED_ERROR.message, null);
        }
        return errorResponse;
    }
    handleCoreException(error, errorResponse) {
        if (error instanceof Exception_1.Exception) {
            errorResponse = CoreApiResponse_1.CoreApiResponse.error(error.code, error.message, error.data);
        }
        return errorResponse;
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=HttpExceptionFilter.js.map
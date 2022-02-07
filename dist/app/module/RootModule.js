"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootModule = void 0;
const common_1 = require("@nestjs/common");
const InfraModule_1 = require("./InfraModule");
const TaskModule_1 = require("./TaskModule");
let RootModule = class RootModule {
};
RootModule = __decorate([
    (0, common_1.Module)({
        imports: [InfraModule_1.InfraModule, TaskModule_1.TaskModule],
    })
], RootModule);
exports.RootModule = RootModule;
//# sourceMappingURL=RootModule.js.map
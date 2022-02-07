"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerApplication_1 = require("./app/ServerApplication");
async function runApplication() {
    const serverApplication = ServerApplication_1.ServerApplication.new();
    await serverApplication.run();
}
(async () => {
    await runApplication();
})();
//# sourceMappingURL=main.js.map
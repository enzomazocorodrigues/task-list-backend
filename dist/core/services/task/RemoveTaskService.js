"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTaskService = void 0;
const Assert_1 = require("../../common/assert/Assert");
const Code_1 = require("../../common/exception/Code");
const Exception_1 = require("../../common/exception/Exception");
class RemoveTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute({ id }) {
        Assert_1.Assert.isTrue(await this.taskRepository.remove({ id }), new Exception_1.Exception({
            codeDescription: Code_1.Code.ENTITY_NOT_FOUND_ERROR,
            overrideMessage: 'Task was not deleted.',
        }));
    }
}
exports.RemoveTaskService = RemoveTaskService;
//# sourceMappingURL=RemoveTaskService.js.map
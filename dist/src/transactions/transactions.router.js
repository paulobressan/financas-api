"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const transactions_model_1 = require("./transactions.model");
const transactions_schema_1 = require("./transactions.schema");
class TransactionRouter extends model_router_1.ModelRouter {
    constructor() {
        super(transactions_model_1.Transaction);
    }
    apply(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.post(`${this.basePath}`, this.validateSchema(transactions_schema_1.transactionsSchemaSave), this.save);
        application.put(`${this.basePath}/:id`, this.validateId, this.validateSchema(transactions_schema_1.transactionsSchemaSave), this.replace);
        application.patch(`${this.basePath}/:id`, this.validateId, this.update);
    }
}
exports.transactionRouter = new TransactionRouter();
//# sourceMappingURL=transactions.router.js.map
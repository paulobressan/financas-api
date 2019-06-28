"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
exports.transactionsSchemaSave = joi.object().keys({
    category: joi.string().required(),
    date: joi.date().required(),
    value: joi.number().required(),
    type: joi.number().required(),
    isAtivo: joi.boolean()
});
//# sourceMappingURL=transactions.schema.js.map
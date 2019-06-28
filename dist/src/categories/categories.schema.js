"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
exports.CategoriesSchemaSave = joi.object().keys({
    name: joi.string().required().min(3).max(250),
    isAtivo: joi.boolean()
});
//# sourceMappingURL=categories.schema.js.map
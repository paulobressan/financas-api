"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const categories_model_1 = require("./categories.model");
const categories_schema_1 = require("./categories.schema");
class CategoriesRouter extends model_router_1.ModelRouter {
    constructor() {
        super(categories_model_1.Category);
    }
    apply(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.post(`${this.basePath}`, this.validateSchema(categories_schema_1.CategoriesSchemaSave), this.save);
        application.put(`${this.basePath}/:id`, this.validateId, this.validateSchema(categories_schema_1.CategoriesSchemaSave), this.replace);
        application.patch(`${this.basePath}/:id`, this.validateId, this.update);
    }
}
exports.categoriesRouter = new CategoriesRouter();
//# sourceMappingURL=categories.router.js.map
import * as express from 'express';
import { ModelRouter } from '../../common/model-router';
import { Category } from './categories.model';
import { authorize } from '../security/auth.handler';
import { CategoriesSchemaSave } from './categories.schema';

class CategoriesRouter extends ModelRouter<Category> {
    constructor() {
        super(Category);
    }

    apply(application: express.Application): void {
        application.get(`${this.basePath}`, this.findAll)
        application.post(`${this.basePath}`, this.validateSchema(CategoriesSchemaSave), this.save)
        application.put(`${this.basePath}/:id`, this.validateId, this.validateSchema(CategoriesSchemaSave), this.replace)
        application.patch(`${this.basePath}/:id`, this.validateId, this.update)
    }
}

export const categoriesRouter = new CategoriesRouter();
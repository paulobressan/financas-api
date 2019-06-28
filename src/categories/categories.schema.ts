import * as joi from 'joi';

export const CategoriesSchemaSave: joi.Schema = joi.object().keys({
    name: joi.string().required().min(3).max(250),
    isAtivo: joi.boolean()
});
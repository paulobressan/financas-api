import * as joi from 'joi'

export const UsersSchemaSave: joi.Schema = joi.object().keys({
    name: joi.string().required().min(3).max(80),
    fone: joi.string().required().min(11).max(20),
    email: joi.string().email().min(6).max(255),
    isEmail: joi.boolean(),
    password: joi.string().required().min(8),
})
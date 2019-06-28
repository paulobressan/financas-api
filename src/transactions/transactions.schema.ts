import * as joi from "joi";

export const transactionsSchemaSave: joi.Schema = joi.object().keys({
  category: joi.string().required(),
  date: joi.date().required(),
  value: joi.number().required(),
  type: joi.number().required(),
  isAtivo: joi.boolean()
});

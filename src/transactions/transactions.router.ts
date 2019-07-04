import * as express from "express";
import { ModelRouter } from "../../common/model-router";
import { authorize } from "../security/auth.handler";
import { Transaction } from "./transactions.model";
import { transactionsSchemaSave } from "./transactions.schema";
import * as mongoose from "mongoose";

class TransactionRouter extends ModelRouter<Transaction> {
  constructor() {
    super(Transaction);
  }

  protected prepareAll(
    query: mongoose.DocumentQuery<Transaction[], Transaction>
  ): mongoose.DocumentQuery<Transaction[], Transaction> {
    return query.populate("category");
  }

  apply(application: express.Application): void {
    application.get(`${this.basePath}`, this.findAll);
    application.post(
      `${this.basePath}`,
      this.validateSchema(transactionsSchemaSave),
      this.save
    );
    application.put(
      `${this.basePath}/:id`,
      this.validateId,
      this.validateSchema(transactionsSchemaSave),
      this.replace
    );
    application.patch(`${this.basePath}/:id`, this.validateId, this.update);
  }
}

export const transactionRouter = new TransactionRouter();

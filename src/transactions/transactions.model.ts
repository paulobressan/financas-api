import * as mongoose from "mongoose";
import { TransactionType } from "./transactions.enum";

export interface Transaction extends mongoose.Document {
  category: mongoose.Types.ObjectId;
  date: Date;
  value: number;
  type: TransactionType;
}

const transactionSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  isAtivo: {
    type: Boolean,
    required: false,
    default: true
  },
  updateAt: {
    type: Date,
    required: false,
    default: new Date()
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date()
  }
});

export const Transaction = mongoose.model<Transaction>(
  "Transaction",
  transactionSchema
);

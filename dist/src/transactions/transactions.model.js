"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
exports.Transaction = mongoose.model("Transaction", transactionSchema);
//# sourceMappingURL=transactions.model.js.map
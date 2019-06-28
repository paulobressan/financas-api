"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name category is required'],
        maxlength: [250, 'name category limit exceeded 250 characters'],
        minlength: [3, 'name category limit min 3 characters'],
    },
    isAtivo: {
        type: Boolean,
        required: false,
        default: true
    },
    updatedAt: {
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
exports.Category = mongoose.model('Category', categorySchema);
//# sourceMappingURL=categories.model.js.map
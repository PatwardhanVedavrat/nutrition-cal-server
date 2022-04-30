"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = exports.addItem = exports.getCategories = exports.addCategory = void 0;
const categoryModel_1 = require("../model/categoryModel");
const itemModel_1 = require("../model/itemModel");
const addCategory = (req, res) => {
    const newCategory = new categoryModel_1.categoryModel(req.body);
    newCategory.save((err, _category) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send("category added");
        }
    });
};
exports.addCategory = addCategory;
const getCategories = (_req, res) => {
    categoryModel_1.categoryModel.find({}, (err, categories) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(categories);
        }
    });
};
exports.getCategories = getCategories;
const addItem = (req, res) => {
    const newItem = new itemModel_1.itemModel(req.body);
    newItem.save((err, _item) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send("item added");
        }
    });
};
exports.addItem = addItem;
const getItems = (req, res) => {
    const { categoryId } = req.params;
    itemModel_1.itemModel.find({ category: categoryId }, (err, items) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(items);
        }
    });
};
exports.getItems = getItems;

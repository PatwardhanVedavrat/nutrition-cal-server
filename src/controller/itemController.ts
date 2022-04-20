import { Request, Response } from "express";
import { categoryModel } from "../model/categoryModel";
import { itemModel } from "../model/itemModel";

export const addCategory = (req: Request, res: Response) => {
  const newCategory = new categoryModel(req.body);
  newCategory.save((err: any, _category: { name: string }) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("category added");
    }
  });
};

export const getCategories = (_req: Request, res: Response) => {
  categoryModel.find({}, (err: any, categories: { name: string }[]) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(categories);
    }
  });
};

export const addItem = (req: Request, res: Response) => {
  const newItem = new itemModel(req.body);
  newItem.save((err: any, _item: { name: string }) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("item added");
    }
  });
};

export const getItems = (req: Request, res: Response) => {
  const { categoryId } = req.params;
  itemModel.find({ category: categoryId }, (err: any, items: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

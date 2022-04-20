import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {
  addCategory,
  addItem,
  getCategories,
  getItems,
} from "./controller/itemController";
const port = process.env.PORT || 5000;

dotenv.config();
mongoose.Promise = global.Promise;
//@ts-ignore
mongoose.connect(process.env.MONGO_URL || process.env.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", (_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.post("/add-category", (req: Request, res: Response) => {
  addCategory(req, res);
});
app.get("/categories", (req: Request, res: Response) => {
  getCategories(req, res);
});
app.post("/add-item", (req: Request, res: Response) => {
  addItem(req, res);
});
app.get("/items/:categoryId", (req: Request, res: Response) => {
  getItems(req, res);
});
app.use("/", (_req, res) => res.send("404 not found"));
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

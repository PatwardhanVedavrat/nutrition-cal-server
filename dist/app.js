"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const itemController_1 = require("./controller/itemController");
const port = process.env.PORT || 5000;
dotenv_1.default.config();
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(process.env.MONGO_URL || process.env.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.all("/*", (_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.post("/add-category", (req, res) => {
    (0, itemController_1.addCategory)(req, res);
});
app.get("/categories", (req, res) => {
    (0, itemController_1.getCategories)(req, res);
});
app.post("/add-item", (req, res) => {
    (0, itemController_1.addItem)(req, res);
});
app.get("/items/:categoryId", (req, res) => {
    (0, itemController_1.getItems)(req, res);
});
app.use("/", (_req, res) => res.send("404 not found"));
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

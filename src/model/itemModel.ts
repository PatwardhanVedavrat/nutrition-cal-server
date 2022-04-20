import { model, Schema } from "mongoose";

const itemSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: "category" },
  name: { type: String, required: true, unique: true },
  moisture: String,
  protien: String,
  fat: String,
  minerals: String,
  crudeFibre: String,
  carboHydrates: String,
  energy: String,
  calcium: String,
  phosphorus: String,
  iron: String,
});
export const itemModel = model("item", itemSchema);

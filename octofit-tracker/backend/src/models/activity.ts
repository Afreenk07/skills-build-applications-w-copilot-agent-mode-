import { Schema, model, Document } from "mongoose";

export interface IActivity extends Document {
  name: string;
  type?: string;
  caloriesPerHour?: number;
}

const ActivitySchema = new Schema<IActivity>({
  name: { type: String, required: true },
  type: { type: String },
  caloriesPerHour: { type: Number }
});

export default model<IActivity>("Activity", ActivitySchema);

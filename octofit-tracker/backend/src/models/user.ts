import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  team?: Types.ObjectId;
  role?: string;
  createdAt?: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  team: { type: Schema.Types.ObjectId, ref: "Team" },
  role: { type: String },
  createdAt: { type: Date, default: () => new Date() }
});

export default model<IUser>("User", UserSchema);

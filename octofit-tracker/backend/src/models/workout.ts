import { Schema, model, Document, Types } from "mongoose";

export interface IWorkout extends Document {
  user: Types.ObjectId;
  team?: Types.ObjectId;
  activity: Types.ObjectId;
  durationMinutes: number;
  caloriesBurned: number;
  date: Date;
}

const WorkoutSchema = new Schema<IWorkout>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  team: { type: Schema.Types.ObjectId, ref: "Team" },
  activity: { type: Schema.Types.ObjectId, ref: "Activity", required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  date: { type: Date, default: () => new Date() }
});

export default model<IWorkout>("Workout", WorkoutSchema);

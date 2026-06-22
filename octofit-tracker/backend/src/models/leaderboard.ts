import { Schema, model, Document, Types } from "mongoose";

export interface ILeaderboard extends Document {
  team?: Types.ObjectId;
  user?: Types.ObjectId;
  points: number;
  date?: Date;
}

const LeaderboardSchema = new Schema<ILeaderboard>({
  team: { type: Schema.Types.ObjectId, ref: "Team" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  points: { type: Number, required: true },
  date: { type: Date, default: () => new Date() }
});

export default model<ILeaderboard>("Leaderboard", LeaderboardSchema);

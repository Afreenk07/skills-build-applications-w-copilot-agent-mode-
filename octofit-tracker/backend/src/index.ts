import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./routes/users";
import teamsRouter from "./routes/teams";
import activitiesRouter from "./routes/activities";
import leaderboardRouter from "./routes/leaderboard";
import workoutsRouter from "./routes/workouts";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/octofit";

// Codespaces-aware API URL support using CODESPACE_NAME
const CODESPACE = process.env.CODESPACE_NAME;
const API_URL = CODESPACE
  ? `https://${CODESPACE}-${PORT}.githubpreview.dev`
  : `http://localhost:${PORT}`;

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "OctoFit Tracker backend running", apiUrl: API_URL });
});

// Mount API routers
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/workouts", workoutsRouter);

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    console.log(`API base URL: ${API_URL}`);

    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
dotenv_1.default.config();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/octofit";
// Codespaces-aware API URL support using CODESPACE_NAME
const CODESPACE = process.env.CODESPACE_NAME;
const API_URL = CODESPACE
    ? `https://${CODESPACE}-${PORT}.githubpreview.dev`
    : `http://localhost:${PORT}`;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.json({ status: "ok", message: "OctoFit Tracker backend running", apiUrl: API_URL });
});
// Mount API routers
app.use("/api/users", users_1.default);
app.use("/api/teams", teams_1.default);
app.use("/api/activities", activities_1.default);
app.use("/api/leaderboard", leaderboard_1.default);
app.use("/api/workouts", workouts_1.default);
async function start() {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("Connected to MongoDB");
        console.log(`API base URL: ${API_URL}`);
        app.listen(PORT, () => {
            console.log(`Backend listening on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}
start();

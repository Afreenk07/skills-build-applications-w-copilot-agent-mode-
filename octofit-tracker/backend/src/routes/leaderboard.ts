import { Router } from "express";

const router = Router();

// Simple leaderboard GET
router.get("/", (_req, res) => {
  res.json({ leaderboard: [], message: "leaderboard (placeholder)" });
});

export default router;

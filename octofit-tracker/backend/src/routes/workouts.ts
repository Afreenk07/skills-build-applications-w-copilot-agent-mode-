import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ workouts: [], message: "workouts list (placeholder)" });
});

router.post("/", (req, res) => {
  const payload = req.body;
  res.status(201).json({ message: "workout created (placeholder)", payload });
});

export default router;

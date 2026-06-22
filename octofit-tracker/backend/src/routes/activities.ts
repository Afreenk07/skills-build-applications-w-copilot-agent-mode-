import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ activities: [], message: "activities list (placeholder)" });
});

router.post("/", (req, res) => {
  const payload = req.body;
  res.status(201).json({ message: "activity created (placeholder)", payload });
});

export default router;

import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ teams: [], message: "teams list (placeholder)" });
});

router.post("/", (req, res) => {
  const payload = req.body;
  res.status(201).json({ message: "team created (placeholder)", payload });
});

export default router;

import { Router } from "express";

const router = Router();

// GET /api/users/ - list users (placeholder)
router.get("/", (_req, res) => {
  res.json({ users: [], message: "users list (placeholder)" });
});

// POST /api/users/ - create a user (placeholder)
router.post("/", (req, res) => {
  const payload = req.body;
  res.status(201).json({ message: "user created (placeholder)", payload });
});

export default router;

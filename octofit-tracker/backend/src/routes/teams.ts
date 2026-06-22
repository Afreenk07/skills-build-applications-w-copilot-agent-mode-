import { Router } from "express";
import Team from "../models/team";

const router = Router();

router.get("/", async (_req, res) => {
  const teams = await Team.find().populate("members").lean();
  res.json({ teams });
});

router.post("/", async (req, res) => {
  const payload = req.body;
  const created = await Team.create(payload);
  res.status(201).json(created);
});

export default router;

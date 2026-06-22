"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_req, res) => {
    res.json({ workouts: [], message: "workouts list (placeholder)" });
});
router.post("/", (req, res) => {
    const payload = req.body;
    res.status(201).json({ message: "workout created (placeholder)", payload });
});
exports.default = router;

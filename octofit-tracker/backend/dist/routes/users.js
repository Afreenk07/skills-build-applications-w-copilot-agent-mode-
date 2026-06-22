"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/users/ - list users (placeholder)
router.get("/", (_req, res) => {
    res.json({ users: [], message: "users list (placeholder)" });
});
// POST /api/users/ - create a user (placeholder)
router.post("/", (req, res) => {
    const payload = req.body;
    res.status(201).json({ message: "user created (placeholder)", payload });
});
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Simple leaderboard GET
router.get("/", (_req, res) => {
    res.json({ leaderboard: [], message: "leaderboard (placeholder)" });
});
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_req, res) => {
    res.json({ teams: [], message: "teams list (placeholder)" });
});
router.post("/", (req, res) => {
    const payload = req.body;
    res.status(201).json({ message: "team created (placeholder)", payload });
});
exports.default = router;

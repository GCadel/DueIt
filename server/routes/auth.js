import express from "express";

import jwt from "jsonwebtoken";
import passport from "passport";
import "../controllers/auth.js";

const router = express.Router();

router.post("/login", passport.authenticate("local"), async (req, res) => {
  try {
    const token = jwt.sign(
      {
        email: req.user.email,
        id: req.user.id,
        role: req.user.role_id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "15d" }
    );
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(409).json({ error: error.message });
  }
});

export default router;

import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, nickname } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword, nickname });
  await user.save();
  res.json({ success: true, userId: user._id });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, 'secret_key');
    res.json({ success: true, userId: user._id, nickname: user.nickname, isActivated: user.isActivated });
  } else {
    res.json({ success: false });
  }
});

export default router;

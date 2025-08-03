import express from 'express';
import { User } from '../models/user.js';

const router = express.Router();

router.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

export default router;

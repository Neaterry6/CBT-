import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: String,
  avatar: String,
  isActivated: { type: Boolean, default: false },
  scores: [{ subject: String, score: Number, date: Date }],
  usage: {
    timeSpent: { type: Number, default: 0 },
    dataUsed: { type: Number, default: 0 },
    pendingAmount: { type: Number, default: 0 },
  },
});

export const User = mongoose.model('User', userSchema);

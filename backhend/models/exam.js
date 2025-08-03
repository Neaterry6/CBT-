import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: String,
  year: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

export const Exam = mongoose.model('Exam', examSchema);

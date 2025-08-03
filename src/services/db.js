import mongoose from 'mongoose';

const uri = 'mongodb+srv://Utmecbt:isaiahilom@1@utme.7jkkmin.mongodb.net/?retryWrites=true&w=majority&appName=Utme';

export const connectDB = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB connected');
};

export const User = mongoose.model('User', new mongoose.Schema({
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
}));

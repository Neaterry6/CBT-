import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/payment.js';
import dataRoutes from './routes/data.js';
import { connectDB } from './db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/payment', paymentRoutes);
app.use('/data', dataRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

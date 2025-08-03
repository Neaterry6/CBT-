import cron from 'node-cron';
import { User } from '../models/user.js';
import { transferFunds } from '../routes/payment.js'; // Adjust import as needed

cron.schedule('0 0 * * *', async () => {
  const users = await User.find();
  users.forEach(user => transferFunds({ userId: user._id }));
});

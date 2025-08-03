import express from 'express';
import stripe from 'stripe'('sk_test_51Rb7khFVz5lDtpGw5FUxtKOpgJ8kWqPiHKpvNlDNKS6zhdvPRllqR45OMRrN2Ncgz2AtROsUstwCw8EWiO2KsQfn00N3sJDSMQ');
import { User } from '../models/user.js';

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price_data: { currency: 'ngn', product_data: { name: 'Activation' }, unit_amount: amount * 100 }, quantity: 1 }],
    mode: 'payment',
    success_url: 'http://localhost:3000/?success=true',
    cancel_url: 'http://localhost:3000/?canceled=true',
  });
  res.json({ clientSecret: session.client_secret });
});

router.post('/usage', async (req, res) => {
  const { userId, timeSpent, dataUsed } = req.body;
  const user = await User.findById(userId);
  if (user) {
    user.usage.timeSpent += timeSpent;
    user.usage.dataUsed += dataUsed;
    user.usage.pendingAmount += (timeSpent * 0.0016667) + (dataUsed * 0.01); // $0.10/hour, $0.01/MB
    await user.save();
    res.json({ success: true, pendingAmount: user.usage.pendingAmount });
  }
});

router.post('/transfer-funds', async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (user && user.usage.pendingAmount > 0) {
    await stripe.transfers.create({
      amount: Math.round(user.usage.pendingAmount * 100),
      currency: 'usd',
      destination: 'opay_account_id', // Replace with Opay Stripe ID
    });
    user.usage.pendingAmount = 0;
    await user.save();
    res.json({ success: true });
  }
});

export default router;

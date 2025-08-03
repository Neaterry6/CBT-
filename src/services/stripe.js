import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('pk_test_51Rb7khFVz5lDtpGwbYCYhWAp2wIzaZUIHvd9hTqnjNGPAdE0oxhMoCepofY2FZJEtlc9RVSNmpOZzp65Ls3KzfcI00DOFXwC05');

export const createCheckoutSession = async (amount) => {
  const response = await fetch('http://localhost:5000/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });
  return response.json();
};

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Rb7khFVz5lDtpGwbYCYhWAp2wIzaZUIHvd9hTqnjNGPAdE0oxhMoCepofY2FZJEtlc9RVSNmpOZzp65Ls3KzfcI00DOFXwC05');

function Activate({ setIsActivated }) {
  const [pin, setPin] = useState('');
  const activationPin = '2028115';
  const whatsappNumber = '+2348107993604';

  const handleActivate = () => {
    if (pin === activationPin) {
      setIsActivated(true);
      alert('Activation successful!');
    } else {
      alert('Invalid pin.');
    }
  };

  const handleStripePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 3000 }),
    });
    const { clientSecret } = await response.json();
    await stripe.redirectToCheckout({ sessionId: clientSecret });
  };

  const handleWhatsAppRequest = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Need activation pin`, '_blank');
  };

  return (
    <main className="p-6 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Activate Your Account</h2>
      <input
        type="text"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter 7-digit pin"
        className="w-full p-3 bg-gray-800 rounded-lg text-white mb-4"
        maxLength="7"
      />
      <button onClick={handleActivate} className="w-full bg-purple-600 p-3 rounded-lg hover:bg-purple-700 mb-4">Activate</button>
      <button onClick={handleStripePayment} className="w-full bg-blue-600 p-3 rounded-lg hover:bg-blue-700 mb-4">Pay N3000 with Stripe</button>
      <button onClick={handleWhatsAppRequest} className="w-full bg-green-600 p-3 rounded-lg hover:bg-green-700">Request via WhatsApp</button>
    </main>
  );
}

export default Activate;

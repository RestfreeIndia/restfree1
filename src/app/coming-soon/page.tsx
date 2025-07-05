'use client'

import React, { useState } from 'react';
import { Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const features = [
  'Hotel bookings by night and by hour',
  'Waiting area reservations',
  'Secure clockroom services',
  'Rest area locations and amenities',
];

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-emerald-50 to-white px-4 py-8">
      <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 shadow-lg mb-4 animate-bounce-slow">
            <Clock size={56} className="text-white" />
          </span>
          <h1 className="text-5xl font-extrabold text-center mb-3 bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
            Coming Soon!
          </h1>
          <p className="text-xl text-gray-700 text-center mb-4 max-w-lg">
            We're working hard to bring you amazing new features. This section is currently under development and will be available soon.
          </p>
        </div>
        <div className="mb-8 w-full">
          <h2 className="font-bold text-lg mb-3 text-emerald-700">What's Coming:</h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-800 text-base">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 mt-2 shadow-inner">
          <div className="flex items-center mb-3">
            <Bell className="text-emerald-600 mr-2" />
            <span className="font-bold text-lg text-emerald-800">Get Notified When It's Ready</span>
          </div>
          {submitted ? (
            <div className="text-emerald-700 font-medium text-center py-2">Thank you! You'll be notified when this feature is available.</div>
          ) : (
            <form className="flex flex-col md:flex-row gap-3 items-center" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white flex-1"
                required
              />
              <Button type="submit" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold shadow-md hover:from-blue-700 hover:to-emerald-600 transition-all">
                Notify Me
              </Button>
              {error && <div className="text-red-600 text-sm w-full md:w-auto text-center">{error}</div>}
            </form>
          )}
          <p className="text-xs text-gray-500 mt-3 text-center">
            We'll send you an email when this feature is available. No spam, we promise.
          </p>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
} 
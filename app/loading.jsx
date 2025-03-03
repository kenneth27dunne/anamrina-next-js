'use client'

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const messages = [  
    "Loading, please hold on...",
    // "Optimizing your experience...",
    "Fetching the latest updates...",
    "Bringing everything together...",
    "Preparing your data...",
];

export default function Loading() {
  const [message, setMessage] = useState(messages[Math.floor(Math.random() * messages.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader2 className="w-16 h-16 animate-spin  text-primary" />
      <p className="mt-4 text-lg font-medium">{message}</p>
    </div>
  );
}

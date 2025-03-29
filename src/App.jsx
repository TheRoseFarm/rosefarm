
import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "Welcome to The Rose Farm Ciolpani",
      description: "A charming countryside venue for weddings, events, and peaceful getaways. Nestled in nature, just outside Bucharest.",
      maps: "📍 Find Us on Google Maps",
      insta: "📸 Follow us on Instagram",
      whatsapp: "💬 Contact via WhatsApp",
      call: "📞 Call Us",
    },
    ro: {
      title: "Bine ați venit la The Rose Farm Ciolpani",
      description: "Un loc de poveste pentru nunți, evenimente și relaxare, în mijlocul naturii, aproape de București.",
      maps: "📍 Vezi pe Google Maps",
      insta: "📸 Urmărește-ne pe Instagram",
      whatsapp: "💬 Contactează-ne pe WhatsApp",
      call: "📞 Sună-ne",
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-50 text-white text-center flex flex-col items-center justify-center p-6">
      <button onClick={() => setLang(lang === 'en' ? 'ro' : 'en')} className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded">
        {lang === 'en' ? 'RO 🇷🇴' : 'EN 🇬🇧'}
      </button>
      <h1 className="text-4xl font-bold mb-4 drop-shadow">{content[lang].title}</h1>
      <p className="text-lg mb-6 max-w-xl drop-shadow">{content[lang].description}</p>

      <div className="space-y-4 w-full max-w-xs">
        <a href="https://maps.app.goo.gl/YourLocationHere" target="_blank"
          className="block bg-pink-600 text-white py-3 rounded-2xl shadow hover:bg-pink-700">
          {content[lang].maps}
        </a>
        <a href="https://instagram.com/therosefarmciolpani" target="_blank"
          className="block bg-pink-500 text-white py-3 rounded-2xl shadow hover:bg-pink-600">
          {content[lang].insta}
        </a>
        <a href="https://wa.me/40700000000" target="_blank"
          className="block bg-green-500 text-white py-3 rounded-2xl shadow hover:bg-green-600">
          {content[lang].whatsapp}
        </a>
        <a href="tel:+40700000000"
          className="block bg-blue-500 text-white py-3 rounded-2xl shadow hover:bg-blue-600">
          {content[lang].call}
        </a>
      </div>

      <p className="mt-8 text-sm text-white drop-shadow">© 2025 The Rose Farm Ciolpani</p>
    </div>
  );
}

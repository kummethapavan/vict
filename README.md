# Farm AI — Smart Farming, Better Future 🌱

A complete AI-powered agriculture web application for Indian farmers. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and integrated with **Open-Meteo** live weather.

---

## ✨ Features

| Module | What it does |
|---|---|
| 🌱 **Teach Me Farming** | 8-step interactive wizard → full personalized crop roadmap |
| 🔬 **Disease Doctor** | Leaf photo analysis with organic & chemical remedies |
| 🌾 **Crop Advisor** | AI suitability ranking by soil, season, water & budget |
| 🧪 **Soil & Fertilizer** | NPK dosage calculator from Soil Health Card values |
| 💧 **Smart Irrigation** | Rainfall-aware drip run-times & water intervals |
| 🌦️ **Weather Advisory** | Live Open-Meteo with spraying / irrigation / harvest advice |
| 📊 **Profit Calculator** | Cost, breakeven, net profit & Recharts donut charts |
| 🏛️ **Market Prices** | AGMARKNET-standard mandi rates across Indian states |
| 📚 **Knowledge Center** | ICAR & TNAU verified farming guides |
| 🏡 **My Farm Profile** | Local-storage farm data, saved plans, scan history |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS (custom farm/earth/sun color system)
- **Charts**: Recharts (pie/bar/comparative charts)
- **Weather**: Open-Meteo (free, no API key required)
- **AI Vision** (optional): Google Gemini 1.5 Flash multimodal
- **Database** (optional): Supabase with PostgreSQL + RLS policies
- **Icons**: Lucide React

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/kummethapavan/FarmAi.git
cd FarmAi

# 2. Install
npm install

# 3. Set environment variables (optional for full AI/DB features)
cp .env.example .env.local
# Edit .env.local and add your keys

# 4. Run
npm run dev
# → Open http://localhost:3000
```

The app runs fully without any API keys using local demo data and the free Open-Meteo weather service.

---

## 🔑 Environment Variables

Create `.env.local` from the example file:

```env
# Supabase (optional — app works offline without it)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Google Gemini AI (optional — enables real image disease diagnosis)
GEMINI_API_KEY=your_gemini_api_key_here

# Open-Meteo (no key required — always free)
# Weather is fetched automatically from https://api.open-meteo.com
```

---

## 🗄️ Database Setup (Supabase)

```sql
-- Run supabase/schema.sql in your Supabase SQL editor
-- Tables: profiles, farm_plots, crop_recommendations, farming_plans,
--         disease_analyses, farming_expenses, mandi_price_records,
--         farmer_notifications
```

---

## 📱 Pages & Routes

| Route | Module |
|---|---|
| `/` | Home Dashboard |
| `/teach-me` | Beginner 8-step Wizard + Generated Plan |
| `/crop-recommendations` | AI Crop Advisor + Side-by-Side Compare |
| `/disease-detection` | Leaf Photo Diagnosis + Scan History |
| `/soil-fertilizer` | NPK Calculator + Organic Alternatives |
| `/irrigation` | Smart Irrigation Advisory |
| `/weather` | Live 7-Day Agricultural Weather |
| `/calculator` | Cost & Profit Calculator |
| `/market-prices` | Mandi Price Tracker |
| `/farming-guides` | Knowledge Center |
| `/profile` | My Farm & Saved Plans |
| `/api/weather` | Weather API route |
| `/api/ai/diagnose-disease` | Disease AI API route |
| `/api/ai/recommend-crop` | Crop Recommendation API route |
| `/api/ai/ask-agronomist` | AI Chat API route |
| `/api/mandi` | Mandi Price API route |

---

## 🌐 Multilingual Support

Switch between **English**, **తెలుగు (Telugu)**, and **हिंदी (Hindi)** using the language selector in the header. All navigation, labels, farming guidance, and form text adapt to the selected language.

Text-to-speech (read aloud) is available throughout for low-literacy users.

---

## 🧪 Running Tests

```bash
npm test
# Runs automated verification suite for:
# - Profit calculator formulas
# - Crop recommendation suitability ranking
# - Irrigation water requirement calculations
# - Fertilizer dosage engine
# - Disease detection logic
# - Multilingual translation completeness
```

---

## 📦 Production Deployment

```bash
npm run build
npm start
```

### Vercel (Recommended)
1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## 🤝 Contributing

Pull requests for additional crop data, regional market integrations, or language packs are welcome.

---

## ⚠️ Disclaimer

Farm AI provides agronomic guidance based on scientific agricultural research and knowledge bases. Always verify recommendations with your local Krishi Vigyan Kendra (KVK) or Block Agriculture Officer before significant field decisions. Market prices shown are benchmark indicatives — always confirm with actual mandi arrivals.

**National Kisan Call Center: 1800-180-1551 (Toll Free)**

---

*Built with ❤️ for India's farming community.*

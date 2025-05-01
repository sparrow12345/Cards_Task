# 🃏 Async Cards — React + Next.js

This project is a test assignment that demonstrates asynchronous card loading with intelligent state management, sorting, responsive layout, and user experience optimizations using React and Next.js, The website is also publicly deployed on Vercel.

## 🚀 Features

- ✅ Asynchronous card loading via API with artificial delay
- 🔄 Request cancellation and refresh logic
- 🔐 Graceful error handling with retry support
- 📦 Sorted cards with fallback placeholders
- 🧱 Responsive design using TailwindCSS
- 🧭 Fixed Header and Footer layout
- 🧩 Modular architecture with reusable components

---

## 🔧 Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/async-cards.git
   cd async-cards
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:3000/cards`

---

## 🌐 API Endpoint

This project fetches cards from:

```
https://node-test-server-production.up.railway.app/api/cards
```

- Introduces a delay of 10–20 seconds.
- Returns a list of card objects with `title` and `text`.

---

## 🧠 Sorting Logic

Cards are sorted as follows:
1. Alphabetically by `Title`
2. By `Text` length if titles match
3. Empty titles are pushed to the end
4. Placeholder or 'More' cards are inserted if needed

---

## 📱 Responsive Design

- ✅ Desktop grid layout (4 columns)
- ✅ 2-column and 1-column responsive breakpoints for tablets and phones
- ✅ Fixed header and footer

---

## 🛠 Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📃 License

This project is for evaluation and educational purposes only.

---

## ✍️ Author

Developed by [Majed Naser](https://github.com/sparrow12345)

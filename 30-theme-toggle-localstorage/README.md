# 30-theme-toggle-localstorage

A simple React project that toggles between light and dark themes and saves the user preference using `localStorage`.

## 💡 Key Concepts

- `useState()` to manage current theme
- `useEffect()` to sync theme changes with `localStorage` and apply it to the document body
- `localStorage.getItem()` and `localStorage.setItem()` to persist theme

## 📦 How It Works

1. On first render, the app checks if a theme is saved in localStorage.
2. If found, it sets that theme as the default.
3. When the user clicks the "Toggle Theme" button, the theme switches.
4. The updated theme is saved to localStorage and applied to the document body.

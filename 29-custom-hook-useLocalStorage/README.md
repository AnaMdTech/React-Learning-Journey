# 29 - useLocalStorage Custom Hook 🧠

This mini project introduces a custom React Hook: `useLocalStorage`. It's a practical way to persist user input even after refreshing the browser.

## 🔍 Concepts Covered

- Custom Hooks
- `useState` with lazy initialization
- `useEffect` to sync with `localStorage`
- LocalStorage API

## 🧪 How It Works

- When the component loads, `useLocalStorage` checks if a value exists in localStorage.
- If it does, it sets it as the default state.
- If not, it uses the initial value you provide.
- On every change, it updates localStorage with the new value.
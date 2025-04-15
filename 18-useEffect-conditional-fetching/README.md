# 📁 18-useEffect-conditional-fetching

This mini project demonstrates **conditional data fetching** in React using the `useEffect` hook. The goal is to fetch a **random user** from an API **only when a button is clicked**, not on every render.

---

## 🚀 Features

- ✅ Uses `useEffect` to trigger API call conditionally  
- 🎲 Fetches random user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)  
- 🔄 Handles loading state  
- 🧑 Displays user name, email, and city  
- 🧼 Clean separation of logic and side effects  

---

## 🧠 What You’ll Learn

- How to control when an API fetch should happen  
- Best practices with `useEffect` and dependency arrays  
- How to generate random content using a number  
- Managing multiple pieces of state (`shouldFetch`, `data`, `loading`)  

---

## 🧱 Technologies

- ⚛️ React  
- 🧠 JavaScript (ES6+)  
- 🌐 JSONPlaceholder API  

---

## 🧪 How It Works

1. Clicking the button generates a random number between 1–10.
2. That number is used as the user ID in the API URL.
3. A `shouldFetch` flag is set to `true`.
4. The `useEffect` hook triggers a fetch only when `shouldFetch` is `true`.
5. Data is loaded, then shown with proper loading and error handling.
# 27 - Global State with Context

## 📚 Overview

This mini project demonstrates how to use **React Context API** to create and manage **global state** that can be shared between deeply nested components without prop drilling.

## 🧠 Concepts Covered

- Creating Context with `createContext`
- Using a Provider component to wrap children and provide shared state
- Accessing and updating global state via `useContext`

## 🛠 Use Case

A shared **counter** that can be incremented from one component and viewed in another — all via **global context state**.

## 🧩 Files & Structure

- `CounterContext.jsx`: Creates and exports context & provider
- `CounterControls.jsx`: Increments the counter
- `CounterDisplay.jsx`: Displays the counter
- `App.jsx`: Wraps components inside `CounterProvider`

## 🧪 What You’ll Learn

- How to define and export a global context
- How to wrap your app with a Provider to share state
- How to read/update global state with `useContext`

## 🧠 Note

This pattern is great for small to medium state sharing. For large-scale apps, consider advanced state libraries like Redux or Zustand.


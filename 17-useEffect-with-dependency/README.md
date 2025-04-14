# 17 - useEffect with Dependency

This mini project demonstrates how to use the `useEffect` hook in React with a **dependency array**.

## 🚀 What You'll Learn

- How to control when `useEffect` runs using dependency arrays
- How to perform side effects like:
  - Updating the document title
  - Logging to the console
- How to track changes to specific pieces of state

## 🧠 Concepts Covered

### `useEffect(() => {}, [])`

- Runs **once** when the component is first mounted

### `useEffect(() => {}, [count])`

- Runs the effect **every time** the `count` state changes

### `useEffect(() => {}, [name])`

- Runs the effect **every time** the `name` state changes

## 🧪 What the App Does

- Displays a counter and a name input
- Increments the count when a button is clicked
- Updates the document title based on the current count
- Logs to the console when `count` or `name` is updated

## 📸 UI Features

- A counter with an increment button
- A name input field
- Real-time feedback when the state changes

## 💻 Tech Stack

- React (Vite)
- useState, useEffect hooks
- Basic styling with CSS
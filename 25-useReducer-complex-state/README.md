# 25 - useReducer for Complex State

## 🧠 Concept

`useReducer` is a React Hook used to manage more complex state logic than `useState`. Instead of updating state directly, you dispatch actions to a reducer function that handles state transitions.

### When to Use `useReducer`
- State depends on previous values
- Multiple related pieces of state
- Easier to manage large form inputs, toggles, counters, etc.

## 🔧 What You'll Learn

- How to define a reducer function
- How to use `dispatch` to update state
- Organizing actions and state transitions
- Clean, scalable state management

## 🧪 What You'll Build

A counter app with:
- Increment (+1)
- Decrement (-1)
- Reset
- Dynamic step value (set via select)

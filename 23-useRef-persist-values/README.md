# 23-useRef-persist-values

This mini project demonstrates how to use the `useRef` hook to track render counts **without triggering re-renders**.

---

## 🧠 What You'll Learn

- The basics of `useRef` and how it stores mutable values
- How to count component renders without state
- Why React components might render more than expected in development

---

## 📦 Key Concept: useRef for Render Counting

We use `useRef` to store a mutable `renderCount` value:

```jsx
const renderCount = useRef(1);
renderCount.current++;
```

This count increases every time the component renders. The key point is that updating a `ref` **does not cause a re-render**, unlike state.

---

## ⚠️ What You Might Encounter (and Why)

### 1. Initial Render Shows "3" Instead of "1"

You may notice the component initially logs:

```
This component rendered 3 times.
```

#### 🤔 Why?

React 18+ runs components **twice on mount** in **development mode** thanks to **Strict Mode**. This is intentional — it helps detect bugs and improper side effects.

So, what’s happening:
- `renderCount` starts at `1`
- It increases on every render
- Because dev mode renders twice, `renderCount` ends up at `3`

✅ This behavior **does not happen** in production builds.

---

### 2. Render Count Increases by 2 on State Updates

You might also notice:
- Each time you click a button to update state (like incrementing a counter),
- The render count increases by **2**, not just 1

Again, this is due to **React Strict Mode** calling your component’s render logic **twice** during development.

---

## 🧼 Cleaner Option: Count Renders in useEffect

To make it more predictable (especially in development), you can increment inside `useEffect`:

```jsx
useEffect(() => {
  renderCount.current++;
});
```

This ensures that `renderCount` only updates **after** the DOM has been updated, giving a cleaner and more accurate count.

---

## ✅ Summary

- `useRef` holds mutable values that persist between renders **without causing re-renders**
- React’s development mode might cause **extra renders** due to Strict Mode
- Using `useRef` to track render count is useful, but you should be aware of how React renders work in development vs. production

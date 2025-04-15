# 24-useRef-uncontrolled-inputs

This mini project shows how to use `useRef` to build **uncontrolled form inputs** in React.

---

## 🔍 What You’ll Learn

- The difference between **controlled** and **uncontrolled** form inputs
- How to access input values directly using `useRef`
- When and why you might use uncontrolled inputs

---

## 🚧 Controlled vs Uncontrolled Inputs

| Controlled (useState) | Uncontrolled (useRef)     |
|------------------------|---------------------------|
| React controls value   | Browser controls value    |
| Renders on each change | No re-render on change    |
| Easier to validate     | Less React overhead       |

---

## 🧠 Notes

- `useRef` points to the actual DOM node (`input`)
- You can read values from `.current.value`
- This is useful for:
  - Quick value access without re-render
  - Avoiding unnecessary re-renders in large forms
  - Integrating with non-React libraries

---

## ✅ Example

```jsx
const nameRef = useRef();
console.log(nameRef.current.value); // Access value directly
```

---

## ⚠️ When to Use Which?

- Use **controlled inputs** when you need to validate, show live feedback, or conditionally render.
- Use **uncontrolled inputs** when you want minimal performance overhead or quick value access.
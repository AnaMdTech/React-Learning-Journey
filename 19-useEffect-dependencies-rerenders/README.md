# 19 - useEffect Dependencies & Re-Renders

## 📚 What You'll Learn

- How the `useEffect` dependency array works
- What triggers a re-render in React
- How to avoid unnecessary side effects
- Best practices for managing state and effects

## 🧠 Key Concepts

- `useEffect(() => {}, [])` runs **once on mount**
- `useEffect(() => {}, [dep])` runs when `dep` **changes**
- No dependency array = runs on **every render**
- Avoid putting **non-stable values** (e.g., objects, functions) in dependencies

## 📝 Notes To Remember

- **Re-renders happen when state/props change**
- **Effects run after every render** unless you tell React when to run them
- Infinite loops happen if you **update state inside an effect** that depends on that state
- Use **console.log** inside your effect to trace execution
- Use `useCallback` or `useMemo` if needed to stabilize dependencies
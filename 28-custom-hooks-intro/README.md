# 28 - 🧠 Custom Hook: `useDocumentTitle`

This mini-project introduces a reusable custom React Hook called `useDocumentTitle`.

## 📌 What it does

Updates the browser tab title based on a dynamic value (like a counter, page name, etc.).

## 🔧 How it works

- You create a custom hook (`useDocumentTitle`) using `useEffect`.
- This hook accepts a `title` string and updates the `document.title` accordingly.
- You can reuse this hook in any component to keep your code clean and focused.

## 📍 Key Takeaways

- ✅ Custom hooks must start with `use`
- ✅ They let you reuse stateful logic across components
- ✅ Clean separation of logic and UI
- ✅ Easy to test and reason about

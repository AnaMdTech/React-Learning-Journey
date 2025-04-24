# 33-react-router-basics

This mini-project introduces the **basics of React Router**, the standard library for routing in React. Routing allows us to build multi-page experiences without reloading the page, using URLs to render different components.

## 🚀 What We Built

- A simple multi-page React app with three pages: `Home`, `About`, and `Contact`
- Basic navigation using `<Link>` from `react-router-dom`
- Route setup using `<BrowserRouter>`, `<Routes>`, and `<Route>`

## 📚 Concepts Covered

### ✅ React Router Basics
- `BrowserRouter` wraps your entire app and enables routing.
- `Route` defines which component to show for which URL.
- `Routes` groups all your routes.
- `Link` allows navigation between pages without reloading.

### ✅ Real-World Use
React Router is used for apps that:
- Have multiple views (e.g., dashboards, blogs, shops)
- Need clean navigation and bookmarking (e.g., `/about`, `/products`)
- Want SPA (Single Page App) behavior with multiple routes

### ❌ Anti-Patterns to Avoid
- Don't use `a href="#"` for navigation – it reloads the page.
- Don't nest routers unnecessarily – stick to one top-level `BrowserRouter`.

## 🎨 Styling with TailwindCSS

We applied clean styling using Tailwind:
- `text-2xl font-bold` for headings
- `hover:text-blue-500` for interactive links
- Layouts with utility classes like `p-4`, `text-center`, etc.

## 💡 Best Practices
- Always keep routes semantic (e.g., `/about`, not `/page1`)
- Structure routes logically as your app grows
- Use layout components to wrap routes for shared UI

## ✅ What We Learned

- How to create page-based navigation in React
- Routing structure and good semantic URL usage
- Tailwind styling best practices for basic layouts
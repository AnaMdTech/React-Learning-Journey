# 35 – React Router: Nested Routes & Layouts

This mini-project demonstrates how to build **nested routes** and **layout components** with React Router. You’ll learn to create shared layouts (e.g. a navbar) and render child pages inside them via `<Outlet />`, keeping your code DRY and your UI consistent.

---

## 🚀 What You’ll Build

- A **MainLayout** component with a persistent **Navbar**  
- Top-level routes: Home, About, Dashboard  
- Nested Dashboard routes: Overview, Analytics, Reports  
- Shared layout for all pages, with only the inner content changing  

---

## 📚 Concepts & Best Practices

### ✅ Nested Routes  
- Define `<Route>`s inside a parent `<Route>` to scope child pages.  
- Render children inside `<Outlet />` in your layout component.

### ✅ Layout Routes  
- Create a layout component (e.g. `MainLayout.jsx`) that wraps shared UI.  
- Avoid repeating the same navbar/footer in every page.

### ✅ Semantic & RESTful URLs  
- Use clear paths like `/dashboard/analytics` instead of query strings.  
- Keep route structure shallow—only nest when it makes sense.

### 🚫 Anti-Patterns to Avoid  
- Don’t duplicate layout markup in each page.  
- Avoid over-nesting (3+ levels) unless absolutely needed.  
- Don’t manually “string-concat” routes; let `<NavLink>` handle navigation.

---

## 🧰 Tech Stack

- React with Vite  
- React Router v6 (`react-router-dom`)  
- Tailwind CSS for utility-first styling  

---

## 📂 Folder Structure

```
35-nested-routes-layout/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── layout/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Dashboard/
│   │       ├── DashboardHome.jsx
│   │       ├── Analytics.jsx
│   │       └── Reports.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🏁 Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run the dev server**  
   ```bash
   npm run dev
   ```

3. **Navigate**  
   - `/` → Home  
   - `/about` → About  
   - `/dashboard` → Dashboard Overview  
   - `/dashboard/analytics` → Analytics  
   - `/dashboard/reports` → Reports  

---

## 🎨 Tailwind CSS Highlights

- Layout containers: `min-h-screen`, `p-6`, `flex`, `items-center`, `justify-center`  
- Cards: `bg-white`, `rounded-lg`, `shadow-sm`, `transition hover:shadow-lg`  
- Navbar: `bg-blue-600`, `text-white`, `flex gap-4`, `NavLink`’s `isActive` styling  

---

## ✅ What You Learned

- Structuring **nested routes** with `<Routes>` and `<Route>`  
- Creating **layout components** that wrap child pages via `<Outlet />`  
- Using `<NavLink>` for active-link styling  
- Organizing routes and components in a clear folder hierarchy  
- Applying **Tailwind CSS** for rapid, consistent styling  
# 34-react-router-dynamic-routing

This project explores **dynamic routing** in React Router — a powerful feature that enables you to build flexible, data-driven routes like user profiles or product detail pages.

## 🚀 What We Built

- A `Home` page with a link to a users list
- A `Users` page that shows a list of users with clickable items
- A `UserProfile` page that loads based on the dynamic ID in the URL (e.g., `/users/2`)

## 📚 Concepts Covered

### ✅ Dynamic Routes
- `:id` syntax in a route path means the route is dynamic.
- `useParams()` is used to extract the route param in a component.
- This allows you to fetch data or filter content based on the URL.

```jsx
<Route path="/users/:id" element={<UserProfile />} />
const { id } = useParams();
```

### ✅ RESTful Routes
We follow RESTful and semantic URLs:
- ✅ `/users/1` instead of ❌ `/user?id=1`

### ✅ Real-World Use
- Blog posts: `/posts/:slug`
- User profiles: `/users/:id`
- Product pages: `/products/:id`

### ❌ Anti-Patterns to Avoid
- Avoid using query strings for core navigation (`?id=1`)
- Don't hardcode route paths in multiple places — use route config/constants

## 🎨 Styling with TailwindCSS

- Semantic structure: `max-w-md`, `rounded-lg`, `shadow-md`
- `hover:shadow-lg` for interactive cards
- `block w-full` to make full list items clickable

## ✅ Best Practices

- Wrap dynamic paths in meaningful route structure (`/users/:id`)
- Make list items interactive and accessible
- Use a fallback if dynamic param doesn’t match (e.g., `User not found`)

## 📂 Folder Structure

```
src/
├── App.jsx
├── pages/
│   ├── Home.jsx
│   ├── Users.jsx
│   └── UserProfile.jsx
└── main.jsx
```

## ✅ What We Learned

- How to build dynamic and semantic routes using React Router
- How to extract and use URL parameters with `useParams()`
- TailwindCSS styling best practices for UI interactions
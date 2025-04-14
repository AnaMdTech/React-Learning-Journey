# 15-useEffect-cleanup

This mini project demonstrates how to use the `useEffect` hook with a cleanup function in React.

## 🔍 Key Concepts

- `useEffect` can return a cleanup function.
- Cleanup is used to prevent memory leaks, especially for:
  - Intervals and timeouts
  - Event listeners
  - Subscriptions (e.g., WebSocket, Firebase)
- The cleanup runs when:
  - The component unmounts
  - Or before the effect re-runs (if dependencies change)

## ⚙️ What’s Happening

- When the `Timer` component mounts, it starts a `setInterval`.
- Every second, it updates the time.
- When you hide the component (`setShow(false)`), the cleanup clears the interval.
- This prevents the interval from running in the background after the component is gone.

## 🚀 Try It

- Click "Hide Timer" to see the cleanup in action (check your console logs!).
- Re-show the component — it starts fresh again.

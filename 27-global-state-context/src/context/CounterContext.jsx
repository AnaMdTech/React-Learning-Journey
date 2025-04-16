// context/CounterContext.jsx
import { createContext, useContext } from "react";

// Create context
export const CounterContext = createContext();

// Custom hook to access context
export function useCounter() {
  return useContext(CounterContext);
}

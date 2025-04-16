// src/App.jsx
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import { CounterProvider } from "./context/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <div className="app">
        <h1>Global State with Context 🌀</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default App;

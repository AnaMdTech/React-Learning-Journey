import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "setStep":
      return { ...state, step: Number(action.payload) };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  return (
    <div className="container">
      <h1>useReducer Counter</h1>
      <p>
        Current Count: <strong>{count}</strong>
      </p>

      <div className="controls">
        <button onClick={() => dispatch({ type: "decrement" })}>−</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div className="step-control">
        <label>Step: </label>
        <select
          value={step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: e.target.value })
          }
        >
          <option value={1}>+1</option>
          <option value={2}>+2</option>
          <option value={5}>+5</option>
          <option value={10}>+10</option>
        </select>
      </div>
    </div>
  );
}

export default App;

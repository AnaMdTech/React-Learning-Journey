export default function CounterDisplay({ count, onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <button onClick={onDecrement}>➖</button>
      <span className="count">{count}</span>
      <button onClick={onIncrement}>➕</button>
    </div>
  );
}

export default function StepSelector({ step, setStep }) {
  return (
    <div className="step-selector">
      <label>Select Step: </label>
      <select value={step} onChange={(e) => setStep(Number(e.target.value))}>
        <option value={1}>+1</option>
        <option value={2}>+2</option>
        <option value={5}>+5</option>
        <option value={10}>+10</option>
      </select>
    </div>
  );
}

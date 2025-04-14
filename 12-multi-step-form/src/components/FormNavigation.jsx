export default function FormNavigation({ step, nextStep, prevStep }) {
  return (
    <div className="nav-buttons">
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 3 && <button onClick={nextStep}>Next</button>}
    </div>
  );
}

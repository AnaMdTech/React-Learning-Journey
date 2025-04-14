import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import FormNavigation from "./components/FormNavigation";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
      {step === 3 && <Step3 formData={formData} />}

      <FormNavigation step={step} nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
}

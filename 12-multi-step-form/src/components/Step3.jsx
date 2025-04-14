export default function Step3({ formData }) {
  return (
    <div className="form-step">
      <h2>Review</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>✅ Thank you for submitting!</p>
    </div>
  );
}

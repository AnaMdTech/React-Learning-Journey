export default function Step1({ formData, handleChange }) {
  return (
    <div className="form-step">
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
      />
    </div>
  );
}

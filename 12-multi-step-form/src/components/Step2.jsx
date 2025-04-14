export default function Step2({ formData, handleChange }) {
  return (
    <div className="form-step">
      <label>Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
    </div>
  );
}

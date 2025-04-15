import { useRef } from "react";

export default function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    console.log("Submitted:", enteredName, enteredEmail);

    // Optional: clear inputs
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div className="form-container">
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" ref={nameRef} placeholder="Enter name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" ref={emailRef} placeholder="Enter email" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

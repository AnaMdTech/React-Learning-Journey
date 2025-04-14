import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} value={message} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Smith", email: "janesmith@gmail.com" },
  { id: 3, name: "Sam Johnson", email: "samjohnson@gmail.com" },
];

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/users/:id" element={<UserProfile users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

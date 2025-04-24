import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Analytics from "./pages/Dashboard/Analytics";
import Reports from "./pages/Dashboard/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard">
            <Route index element={<DashboardHome />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

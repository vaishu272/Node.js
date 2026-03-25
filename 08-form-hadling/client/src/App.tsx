import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Default route */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Make_Entry } from "./pages/Make_Entry";
import { View_Entry } from "./pages/View_Entry";
import { Dashboard } from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Make_Entry />} />
        <Route path="/view" element={<View_Entry />} />
      </Routes>
    </Router>
  );
}

export default App;

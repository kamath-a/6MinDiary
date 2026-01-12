import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MakeEntry } from "./pages/MakeEntry";
import { ViewEntry } from "./pages/ViewEntry";
import { Dashboard } from "./pages/Dashboard";
import { WriteEntry } from "./pages/WriteEntry";
import { UploadEntry } from "./pages/UploadEntry";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<MakeEntry />} />
        <Route path="/view" element={<ViewEntry />} />
        <Route path="/write" element={<WriteEntry />} />
        <Route path="/upload" element={<UploadEntry />} />
      </Routes>
    </Router>
  );
}

export default App;

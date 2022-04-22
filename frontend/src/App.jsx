import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componemts/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;

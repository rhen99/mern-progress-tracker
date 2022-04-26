import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authStore";
import { ProjectProvider } from "./context/projectStore";
import Header from "./componemts/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Project from "./pages/Project";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:id" element={<Project />} />
            <Route path="/create" element={<AddProject />} />
          </Routes>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

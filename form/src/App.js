import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const handleLogin = (newToken) => {
    setToken(newToken);
    toast.success("Login successful!");
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    toast.info("Logged out successfully!");
  };

  return (
    <UserProvider>
      <Router>
        <Navbar onLogout={handleLogout} />
        <ToastContainer position="top-center" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<LoginPage setToken={handleLogin} />} />
          <Route path="/users" element={token ? <UserList /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={token ? <EditUser /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

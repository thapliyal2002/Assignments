import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", { email, password });
      setToken(response.data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

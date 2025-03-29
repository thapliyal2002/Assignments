import { useNavigate } from "react-router-dom";

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); 
    }
    navigate("/login");
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">EmployWise</h1>
      <button 
        onClick={handleLogout} 
        className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
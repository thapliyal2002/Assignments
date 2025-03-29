import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext"; 

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUserInList } = useContext(UserContext); 
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    const foundUser = users.find((u) => u.id === parseInt(id));
    if (foundUser) {
      setUser(foundUser);
    } else {
      axios.get(`https://reqres.in/api/users/${id}`)
        .then((res) => setUser(res.data.data))
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [id, users]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      
      
      updateUserInList(user);

      alert("User updated successfully!");
      navigate("/users");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input 
          type="text" 
          value={user.first_name} 
          onChange={(e) => setUser({ ...user, first_name: e.target.value })} 
          className="w-full p-2 border rounded mb-2" 
          required 
        />
        <input 
          type="text" 
          value={user.last_name} 
          onChange={(e) => setUser({ ...user, last_name: e.target.value })} 
          className="w-full p-2 border rounded mb-2" 
          required 
        />
        <input 
          type="email" 
          value={user.email} 
          onChange={(e) => setUser({ ...user, email: e.target.value })} 
          className="w-full p-2 border rounded mb-2" 
          required 
        />
        <button className="w-full p-2 bg-green-500 text-white rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;

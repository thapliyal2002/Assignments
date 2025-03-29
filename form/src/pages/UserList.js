import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext"; 

function UserList() {
  const { users, setUsers, deleteUserFromList } = useContext(UserContext); 
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [page, setPage] = useState(1);
  const usersPerPage = 6;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        if (users.length === 0) {
          let usersArray = [];
          let pageNum = 1;
          let totalPages = 1;

          while (pageNum <= totalPages) {
            const response = await axios.get(`https://reqres.in/api/users?page=${pageNum}`);
            usersArray = [...usersArray, ...response.data.data];
            totalPages = response.data.total_pages;
            pageNum++;
          }

          setUsers(usersArray); 
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchAllUsers();
  }, [users, setUsers]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(user => 
      user.first_name.toLowerCase().includes(query) || 
      user.last_name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
    setPage(1);
  }, [searchQuery, users]);

  
  const handleDelete = (id) => {
    deleteUserFromList(id);
    alert("User deleted successfully!");
  };

  const indexOfLastUser = page * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      <input
        type="text"
        placeholder="Search users by name or email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentUsers.length > 0 ? (
          currentUsers.map((user) => (
            <div key={user.id} className="p-4 border rounded shadow">
              <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full" />
              <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <button 
                onClick={() => navigate(`/edit/${user.id}`)} 
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(user.id)} 
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No users found.</p>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)} 
          className="p-2 bg-gray-300 rounded"
        >
          Prev
        </button>
        <button 
          disabled={indexOfLastUser >= filteredUsers.length} 
          onClick={() => setPage(page + 1)} 
          className="p-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;

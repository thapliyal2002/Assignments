import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  
  const updateUserInList = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  
  const deleteUserFromList = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, setUsers, updateUserInList, deleteUserFromList }}>
      {children}
    </UserContext.Provider>
  );
}

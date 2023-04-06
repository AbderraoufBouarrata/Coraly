import { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

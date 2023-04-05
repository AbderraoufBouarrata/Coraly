import { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState('hola');

  const updateUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    //fetch user from backend
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

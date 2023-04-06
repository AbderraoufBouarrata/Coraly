import { useState, createContext, useEffect, ReactNode } from "react";

interface UserContextInterface {
  user: boolean;
  updateUser: (user: boolean) => void;
}

const UserContext = createContext<UserContextInterface>({
  user: false,
  updateUser: () => {},
});

interface Props {
  children: ReactNode;
}

function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);

  const updateUser = (user: boolean) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

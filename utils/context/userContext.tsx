import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const UserContext = createContext<User | null>(null);
export const useAuth = () => useContext(UserContext);

function UserProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default UserProvider;

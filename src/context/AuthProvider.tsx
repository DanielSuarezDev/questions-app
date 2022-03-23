import { FC, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../config/firebase";

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface AuthContextType {}

export const AuthContext = createContext<any>({});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userConfig, setUserConfig] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        const { email, displayName, photoURL } = users;
        const userConfigObj = {
          email,
          displayName,
          photoURL,
        };
        setUserConfig(userConfigObj);
      }
    });
  }, []);

  const googleSignIn = (): void => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    user,
    setUser,
    userConfig,
    setUserConfig,
    googleSignIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

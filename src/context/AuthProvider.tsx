import { FC, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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

  const cleanData = (): void => {
    localStorage.clear();
    setUser(null);
    setUserConfig({});
    setUserConfig({ undefined });
  };

  const googleSignIn = (): void => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const googleLogout = async () => {
    await signOut(auth);
    cleanData();
  };

  const value = {
    user,
    setUser,
    userConfig,
    setUserConfig,
    googleSignIn,
    googleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

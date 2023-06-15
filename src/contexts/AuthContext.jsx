import { createContext, useContext, useEffect, useState } from 'react';
import { getAccessToken, removeAccessToken } from '../utils/localstorage';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      setToken(getAccessToken());
    }
  }, []); //////\\\\\\

  const logout = () => {
    removeAccessToken('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

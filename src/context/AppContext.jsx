import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContent = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:8000"; 
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedin(!!token);
    if (token) getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await axios.get(`${backendUrl}/api/v1/user/getMe`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUserData(res.data.user);
    } catch (err) {
      console.error('Failed to fetch user data', err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedin(false);
    setUserData(null);
  };

  return (
    <AppContent.Provider value={{
      backendUrl,
      isLoggedin,
      setIsLoggedin,
      userData,
      getUserData,
      logout
    }}>
      {children}
    </AppContent.Provider>
  );
};


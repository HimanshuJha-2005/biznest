import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user is already logged in when the app loads
    const storedUser = localStorage.getItem('biznest_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const loginContext = (userData) => {
    setUser(userData);
  };

  const logoutContext = () => {
    setUser(null);
    localStorage.removeItem('biznest_token');
    localStorage.removeItem('biznest_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to make accessing auth state easy in any component
export const useAuth = () => useContext(AuthContext);
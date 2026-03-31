import { createContext, useContext, useState, useCallback } from 'react';

import { apiService } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });

  const login = useCallback(async (username, password) => {
    try {
      const response = await apiService.login(username, password);
      if (response && response.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_auth', 'true');
        return true;
      }
    } catch (error) {
      console.error('Login error:', error);
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

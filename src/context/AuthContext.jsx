import { createContext, useContext, useState, useCallback } from 'react';

<<<<<<< HEAD
import { apiService } from '../services/api';

const AuthContext = createContext(null);

=======
const AuthContext = createContext(null);

const CREDENTIALS = { username: 'admin', password: 'admin123' };

>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });

<<<<<<< HEAD
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
=======
  const login = useCallback((username, password) => {
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      return true;
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
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

// components/AuthWrapper.jsx
import { useContext } from 'react';
import { UserContext } from './userContext';
import { AdminContext } from './adminContext';

export const useAuth = () => {
  const { user, loading: userLoading } = useContext(UserContext);
  const { admin, loading: adminLoading } = useContext(AdminContext);

  return {
    user,
    admin,
    isLoading: userLoading || adminLoading,
    isAuthenticated: !!user || !!admin,
    isUser: !!user && !admin,
    isAdmin: !!admin
  };
};
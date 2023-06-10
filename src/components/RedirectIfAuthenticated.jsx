import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function RedirectIfAuthenticated({ children }) {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/allpatient" />;
  }
  return children;
}

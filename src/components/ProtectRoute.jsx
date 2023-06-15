import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectRoute({ children }) {
  const { token } = useAuth();
  if (!token) {
    // console.log('first');
    return <Navigate to="/" />;
  }
  return children;
}

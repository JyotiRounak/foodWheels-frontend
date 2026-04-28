import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';
import { isAuthenticated } from '@utils/auth';

interface ProtectRoutesProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectRoutesProps) => {
  const navigate = useNavigate();
  
useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  if (!isAuthenticated()) return null;

  return children;
}

export default ProtectedRoute;
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext.js';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const { loading } = useUserContext();

  return <>{loading ? children : <Navigate to={redirectTo} />}</>;
};

export default PrivateRoute;

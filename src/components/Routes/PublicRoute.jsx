import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext.js';

const PublicRoute = ({
  children,
  redirectTo = '/offers',
  restricted = false,
}) => {
  const { loading } = useUserContext();
  const shouldRedirect = loading && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
};

export default PublicRoute;

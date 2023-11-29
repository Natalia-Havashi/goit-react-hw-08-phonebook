import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn, selectIsRefresh } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);

  const shouldRedirect = !isLoggenIn && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

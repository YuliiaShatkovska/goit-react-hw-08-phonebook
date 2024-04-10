import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshing);
  // const isVerifed = useSelector(selectUser);
  // console.log(isVerifed);
  const shouldRedirect = !isLoggedIn && !isRefreshed;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

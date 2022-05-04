import { useSelector } from "react-redux";
import { Location, Navigate, useLocation } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { HOME_ROUTE, SIGN_IN_ROUTE } from "../../../utils/constants/routeNames";

export type NavigateState = {
  from: Location;
};

export function PrivateRoute({
  to,
  requiredRole,
}: {
  to: JSX.Element;
  requiredRole: string;
}) {
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.userReducer
  );
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={SIGN_IN_ROUTE} state={{ from: location }} replace />;
  }
  if (role) {
    if (isAuthenticated && role !== requiredRole) {
      return <Navigate to={HOME_ROUTE} state={{ from: location }} replace />;
    }
    return to;
  }
  return to;
}

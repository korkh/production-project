import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getUserAuthData, getUserRoles, UserRole } from "@/entities/User";
import { RoutePath } from "@/shared/const/router";

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const isAccessGranted = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  //better to hold first isAuth it will redirect to main page after logout otherwise will be redirection to forbidden page
  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!isAccessGranted) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
}

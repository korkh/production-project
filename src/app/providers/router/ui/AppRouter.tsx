import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";
import { PageLoader } from "@/widgets/PageLoader";
import { AppRoutesProps } from "@/shared/types/router";
import { routeConfig } from "../routeConfig/routeConfig";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);

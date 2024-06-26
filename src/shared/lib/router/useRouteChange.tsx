import { matchPath, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppRouteByPathPattern, AppRoutes } from "@/shared/const/router";
//checking current routes and returning semantic name of following route
export function useRouteChange() {
	const location = useLocation();
	const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

	useEffect(() => {
		//can be forEach or every
		Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
			if (matchPath(pattern, location.pathname)) {
				setAppRoute(route);
			}
		});
	}, [location.pathname]);

	return appRoute;
}

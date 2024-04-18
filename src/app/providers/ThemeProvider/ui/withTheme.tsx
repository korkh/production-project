import React from "react";
import { useJsonSettings } from "@/entities/User";
import ThemeProvider from "./ThemeProvider";

export const withTheme = (Component: React.ComponentType) => {
	const WithTheme = React.memo(() => {
		const { theme: defaultTheme } = useJsonSettings();
		return (
			<ThemeProvider initialTheme={defaultTheme}>
				<Component />
			</ThemeProvider>
		);
	});

	WithTheme.displayName = `WithTheme(${Component.displayName})`;

	return WithTheme;
};

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { StoreProvider } from "./app/providers/StoreProvider";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "./app/styles/index.scss";
import "./shared/config/i18n/i18n";
import { ForceUpdateProvider } from "./shared/lib/render/forceUpdate";
const container = document.getElementById("root");

if (!container) {
	throw new Error("Container not found. Failed to mount react application.");
}

createRoot(container).render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ForceUpdateProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ForceUpdateProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
);

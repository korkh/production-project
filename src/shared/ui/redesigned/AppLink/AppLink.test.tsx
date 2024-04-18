import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppLinkTheme } from "../../deprecated/AppLink/consts/AppLinkTheme";

import { AppLink } from "./AppLink";

describe("AppLink", () => {
	test("AppLink render", () => {
		render(
			<MemoryRouter>
				<AppLink to="/example">Test</AppLink>
			</MemoryRouter>
		);
		const link = screen.getByText("Test");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/example");
	});
	test("CustomClassName and Theme test for AppLink", () => {
		render(
			<MemoryRouter>
				<AppLink to="/" variant={AppLinkTheme.PRIMARY} className="customClass">
					Test
				</AppLink>
			</MemoryRouter>
		);
		const link = screen.getByText("Test");
		expect(link).toHaveClass("primary");
		expect(link).toHaveClass("customClass");
		screen.debug();
	});
	test("Navigate correctly on Click", () => {
		const { container } = render(
			<MemoryRouter>
				<AppLink to="/example">Test</AppLink>
			</MemoryRouter>
		);
		const link = getByText(container, "Test");
		expect(link).toBeInTheDocument();
		fireEvent.click(link);
	});
});

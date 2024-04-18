import { render, screen } from "@testing-library/react";
import { ButtonTheme } from "../../deprecated/Button/consts/ButtonTheme";

import { Button } from "./Button";

describe("Button", () => {
	test("Test render", () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText("TEST")).toBeInTheDocument();
	});

	test("Test clear theme", () => {
		render(<Button variant={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText("TEST")).toHaveClass("clear");
		screen.debug();
	});
});

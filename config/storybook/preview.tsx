import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import React from "react";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import "../../src/app/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RouterDecorator>
        <ThemeDecorator theme={Theme.LIGHT}>
          <StyleDecorator>
            <Story />
          </StyleDecorator>
        </ThemeDecorator>
      </RouterDecorator>
    ),
  ],
};

export default preview;

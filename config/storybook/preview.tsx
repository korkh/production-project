import type { Preview } from "@storybook/react";
import React from "react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import "../../src/app/styles/index.scss";
import { I18nDecorator } from "shared/config/storybook/i18nDecorator/i18nDecorator";

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
          <I18nDecorator>
            <StyleDecorator>
              <Story />
            </StyleDecorator>
          </I18nDecorator>
        </ThemeDecorator>
      </RouterDecorator>
    ),
  ],
};

export default preview;

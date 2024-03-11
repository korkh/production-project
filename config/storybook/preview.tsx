import type { Preview } from "@storybook/react";
import React from "react";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import "../../src/app/styles/index.scss";
import { I18nDecorator } from "../../src/shared/config/storybook/i18nDecorator/i18nDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Theme } from "../../src/shared/const/Theme";

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
        <SuspenseDecorator>
          <ThemeDecorator theme={Theme.LIGHT}>
            <I18nDecorator>
              <StyleDecorator>
                <Story />
              </StyleDecorator>
            </I18nDecorator>
          </ThemeDecorator>
        </SuspenseDecorator>
      </RouterDecorator>
    ),
  ],
};

export default preview;

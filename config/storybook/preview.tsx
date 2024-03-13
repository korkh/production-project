import type { Preview } from "@storybook/react";

import "../../src/app/styles/index.scss";
import { I18nDecorator } from "../../src/shared/config/storybook/i18nDecorator/i18nDecorator";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
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
    layout: "fullscreen",
    themes: {
      default: "light",
      list: [
        { name: "light", class: ["app", Theme.LIGHT], color: "#ffffff" },
        { name: "dark", class: ["app", Theme.DARK], color: "#000000" },
        { name: "orange", class: ["app", Theme.ORANGE], color: "#ffb005" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <RouterDecorator>
        <SuspenseDecorator>
          {/* <ThemeDecorator theme={Theme.LIGHT}> */}
          <I18nDecorator>
            <StyleDecorator>
              <Story />
            </StyleDecorator>
          </I18nDecorator>
          {/* </ThemeDecorator> */}
        </SuspenseDecorator>
      </RouterDecorator>
    ),
  ],
};

export default preview;

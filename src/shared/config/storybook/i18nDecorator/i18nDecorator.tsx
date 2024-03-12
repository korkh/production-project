import React, { FC, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../i18n/i18nForStorybook";

interface Props {
  children?: React.ReactNode;
}

export const I18nDecorator: FC<Props> = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">{children}</Suspense>
  </I18nextProvider>
);

import i18n from "shared/config/i18n/i18nForStorybook";
import React, { FC, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

interface Props {
  children?: React.ReactNode;
}

export const I18nDecorator: FC<Props> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">{children}</Suspense>
    </I18nextProvider>
  );
};

import React, { FC } from "react";

// eslint-disable-next-line fsd-by-korkh/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/Theme";

interface Props {
  children?: React.ReactNode;
  theme: Theme;
}
const ThemeDecorator: FC<Props> = ({ children, theme }) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`} style={{ minWidth: "100vw" }}>
      {children}
    </div>
  </ThemeProvider>
);
export default ThemeDecorator;

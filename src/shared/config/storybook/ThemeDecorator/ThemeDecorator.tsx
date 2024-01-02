import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import React, { FC } from "react";

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

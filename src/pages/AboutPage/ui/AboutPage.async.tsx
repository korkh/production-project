import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error setting timer
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => resolve(import("./AboutPage")), 1500);
}));

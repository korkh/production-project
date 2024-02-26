import { useEffect, useLayoutEffect } from "react";

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callback();
    }
    // eslint-disable-next-line
  }, []);
}

export function useInitialLayoutEffect(callback: () => void) {
  useLayoutEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callback();
    }
    // eslint-disable-next-line
  }, []);
}

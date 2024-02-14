import { useCallback, useRef } from "react";

/**
 * @description Custom hook to throttle a function execution.
 * Throttling ensures that the wrapped function is called at most once within a specified time interval.
 *
 * @param callback - The function to throttle.
 * @param {number} delay - The time interval (in milliseconds) within which the function should be throttled.
 * @returns - The throttled function.
 */
export function useThrottle(
  callback: (...args: never[]) => void,
  delay: number
) {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: never[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
}

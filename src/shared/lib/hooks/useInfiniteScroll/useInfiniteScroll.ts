import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void; // Optional callback function to execute when scrolling to triggerRef
  triggerRef: MutableRefObject<HTMLElement>; // Ref to the trigger element that indicates when to trigger the callback
  wrapperRef: MutableRefObject<HTMLElement>; // Ref to the wrapper element containing the scrollable content
}

/**
 * Custom hook for implementing infinite scroll behavior.
 * @param param0 Options for configuring infinite scroll behavior
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

export function useInfiniteScroll({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollOptions) {
  // Ref for the IntersectionObserver instance
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Accessing wrapperRef.current and triggerRef.current to obtain references to the DOM elements

    // Obtain the current wrapper element from wrapperRef
    const wrapperElement = wrapperRef.current;

    // Obtain the current trigger element from triggerRef
    const triggerElement = triggerRef.current;

    if (callback) {
      // Configure options for IntersectionObserver
      const options = {
        root: wrapperElement, // Element that is used as the viewport for checking visibility of the target
        rootMargin: "0px", // Margin around the root. Can have values similar to the CSS margin property
        threshold: 1.0, // Value between 0 and 1 indicating the percentage of the target's visibility the observer's callback should be executed
      };

      // Create an IntersectionObserver instance
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // Check if the target element is intersecting with the root (in visibility area)
          // Execute the callback function when the trigger element is intersecting with the root
          callback();
        }
      }, options);

      // Start observing the trigger element
      observer.current.observe(triggerElement);
    }

    // Cleanup function
    return () => {
      if (observer.current && triggerElement) {
        // Stop observing the trigger element when component unmounts
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]); // Re-run the effect when callback, triggerRef, or wrapperRef change
}

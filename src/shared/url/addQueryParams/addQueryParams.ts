/**
 * Extracts query parameters from the current URL and returns them as a string.
 * @param params - OptionalRecord<string, string> - A record of optional key-value pairs to be added to the URL parameters.
 * @returns A string representing the URL parameters.
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
  // Extracting query parameters from the current URL
  const searchParams = new URLSearchParams(window.location.search);

  // Iterating over the provided parameters to add them to the URL
  Object.entries(params).forEach(([name, value]) => {
    // Checking if the value is not undefined before adding it to the URL
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

/**
 * Adds query parameters to the current URL and updates the browser history accordingly.
 * @param params - OptionalRecord<string, string> - A record of optional key-value pairs to be added to the URL parameters.
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  // Updating the browser history with the modified URL containing the additional parameters
  window.history.pushState(null, "", getQueryParams(params));
}

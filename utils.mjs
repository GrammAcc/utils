/** Bind some JS code to run on page load.
  * @param {function} callback A 0-arity function to call once the page content is loaded.
  */
export const onPageLoad = (callback) => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      callback();
    })
  }
}

/**
  * Capitalize all words in input string `s`.
  * No idea why this isn't included in the JS standard.
  * @param {string} s The string to capitalize.
  * @returns {string} The capitalized copy of `s`.
  * Examples:
  *   - capitalize("this is a test") -> "This Is A Test"
  *   - capitalize("THIS IS A TEST") -> "This Is A Test"
  *   - capitalize("This is a test") -> "This Is A Test"
  */
export const capitalize = (s) => {
  const words = s.split(" ").map((word) => word.toLowerCase());
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

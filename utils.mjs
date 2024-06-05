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

/** @type {string} */
const SPINNER_IMAGE_URL = "/path/to/spinner/image";

/** Replace child node tree of `parent` with `Element` returned by `cb`.
  * Adds a loading spinner in place of the dynamic content while `cb` is
  * running asynchronously.
  * @param {Element} parent
  * @param {() => Promise<Element>} cb
  * @returns {Promise<null>}
  * @example
  *   const parentElement = document.querySelector("#parent");
  *   loadUIWithSpinner(parentElement, async () => {
  *     const data = await (await fetch("/api/endpoint")).json();
  *     const ul = document.createElement("ul");
  *     for (const resource of data) {
  *       const li = document.createElement("li");
  *       li.textContent = resource;
  *       ul.appendChild(li);
  *     }
  *     return ul;
  *   })
  */
export const loadUIWithSpinner = async (parent, cb) => {
  const spinner = document.createElement("img");
  spinner.src = SPINNER_IMAGE_URL;
  spinner.alt = "A loading spinner displayed while waiting for data to be fetched from the server.";
  spinner.crossOrigin = "anonymous";
  parent.innerHTML = "";
  parent.appendChild(spinner);
  const newNode = await cb();
  spinner.replaceWith(newNode);
}

/** Replace child node tree of `parent` with `Element` returned by `cb`.
  * @param {Element} parent
  * @param {() => Promise<Element>} cb
  * @returns {Promise<null>}
  * @example
  *   const parentElement = document.querySelector("#parent");
  *   loadUI(parentElement, async () => {
  *     const data = await (await fetch("/api/endpoint")).json();
  *     const ul = document.createElement("ul");
  *     for (const resource of data) {
  *       const li = document.createElement("li");
  *       li.textContent = resource;
  *       ul.appendChild(li);
  *     }
  *     return ul;
  *   })
  */
export const loadUI = async (parent, cb) => {
  parent.innerHTML = "";
  const newNode = await cb();
  parent.appendChild(newNode);
}


/** Directly replace `placeholder` with `Element` returned by `cb`.
  * Adds a loading spinner in place of the dynamic content while `cb` is
  * running asynchronously.
  * @param {Element} placeholder
  * @param {() => Promise<Element>} cb
  * @returns {Promise<null>}
  * @example
  *   const placeholderElement = document.querySelector("#placeholder");
  *   replaceUIWithSpinner(placeholderElement, async () => {
  *     const data = await (await fetch("/api/endpoint")).json();
  *     const ul = document.createElement("ul");
  *     for (const resource of data) {
  *       const li = document.createElement("li");
  *       li.textContent = resource;
  *       ul.appendChild(li);
  *     }
  *     return ul;
  *   })
  */
export const replaceUIWithSpinner = async (placeholder, cb) => {
  const spinner = document.createElement("img");
  spinner.src = SPINNER_IMAGE_URL;
  spinner.alt = "A loading spinner displayed while waiting for data to be fetched from the server.";
  spinner.crossOrigin = "anonymous";
  placeholder.replaceWith(spinner);
  const newNode = await cb();
  spinner.replaceWith(newNode);
}

/** Directly replace `placeholder` with `Element` returned by `cb`.
  * @param {Element} placeholder
  * @param {() => Promise<Element>} cb
  * @returns {Promise<null>}
  * @example
  *   const placeholderElement = document.querySelector("#placeholder");
  *   replaceUI(placeholderElement, async () => {
  *     const data = await (await fetch("/api/endpoint")).json();
  *     const ul = document.createElement("ul");
  *     for (const resource of data) {
  *       const li = document.createElement("li");
  *       li.textContent = resource;
  *       ul.appendChild(li);
  *     }
  *     return ul;
  *   })
  */
export const replaceUI = async (placeholder, cb) => {
  const newNode = await cb();
  placeholder.replaceWith(newNode);
}



/** Bind some JS code to run on page load.
  * @param {() => null} cb A 0-arity function to call once the page content is loaded.
  */
export const onPageLoad = (cb) => {
  if (document.readyState !== 'loading') {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      cb();
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

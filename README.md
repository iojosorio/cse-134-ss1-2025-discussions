# cse-134-ss1-2025-discussions
Weekly Discussions and Demos - CSE 134B SS1 (2025)

**Week 2: HTML**<br><br>
**A.** `w2_demos/coffee_shop/`:
- `div-ities.html`: Basic coffee shop page with heavy div-ities
- `semantic-v0.html`: Same coffee shop page with semantic HTML separation
- `semantic-v1.html`: Same coffee shop page that maximizes effective use of semantic HTML, explores additional elements from HW2 and aspects of them that might not be obvious to the students.

**B.** `w2_demos/custom-element/`:
- `div-classes.html`: Different coffee cards styled differently based on class attributes
- `custom-element-css.html`: Same styling achieved using Semantic CSS custom element

**C.** `w2_demos/other_semantic_tags/`:
- `iframe-progress.html`: Demonstrates use of `<iframe>` and `<progress>` elements
- `ins-del.html`: Demonstrates `<ins>` and `<del>` elements
- `responsive-picture.html`: Demonstrates use of `<picture>` and `<source>` elements (with sourceset attr) in the context of varying screen sizes and image types.

---

**Week 3: CSS**<br><br>
**A.** `w3_demos/basics/`:
- `inclusion.html` - Three ways of including styles in html and their precedence.
- `selectors.html` - Shows reference to elements by `name`, `.class`, `#id`, `*` (and their precedence), combinators - `<space>`, `>`, `~`, `+` and attribute selectors `[attr=<val>]`. 
- `pseudo-selectors.html` - Demonstrates use of pseudo elements and pseudo classes.

**B.** `w3_demos/boxmodel/`:
- `box.html`: Understanding the CSS box model.

**C.** `w3_demos/columns_and_rows/`:
- `flexbox.html`: Demonstrates use of `display:flex` to create responsive row/column layouts with flexible boxes.
- `grid.html`: Demonstrates use of `display:grid` to create responsive grids using CSS.

**D.** `w3_demos/css_variables/`:
- `css-vars.html`: Demonstrates basic usage of CSS variables to define global, reusable properties.

---

**Week 4: Progressive Enhancement with JS**<br><br>
**A.** `w4_demos/newsletter_form_js`: A basic newsletter form that displays a confirmation message when the user clicks the 'Subscribe' button using JS event handlers.

**B.** `w4_demos/astro_blogs`: Demo blog site generated using Astro SSG, inspired by [this tutorial](https://docs.astro.build/en/tutorial/0-introduction/). Explores features like reusable layouts & components, and markdown support.
- `README.md`: This guide helps you set up and run your Astro site on your local machine. It also describes the project structure.

**C.** `w4_demos/localstorage_api`: The same blog site generated earlier is enhanced with a **_bookmarking_** feature using basic JS. Also demonstrates the use of `localStorage API` for persistence.
- `src/layouts/BlogLayout.astro`: Modified to show and manage a bookmark button on each blog
- `src/scripts/bookmark.js`: JS helper to toggle on click, and persist the _isBookmarked_ state in **localStorage**

**Week 5: Custom Elements and Events with JS**<br><br>
**A.** `w5_demos/netflix_custom_element`: 
- `netflix-gallery-expected.html`: A static HTML file to show the expected output - div soup and lots of repetitions.
- `netflix-gallery.html`: HTML enhanced with custom element `netflix-show` to display the repeated show cards (static JSON data), added to the Light DOM using JS.
- `netflix-show.js`: JS module to **create custom element** with desired behavior - toggle the "watchlisted" badge on a show card when clicked, using **event delegation**.
- `netflix-show-css.js`: JS module to export styles for the custom component.

**B.** `w5_demos/netflix_remote_fetch`: 
- `README.txt`: Steps to setup `json-server` locally using npm install.
- `netflix-gallery.html`: The same Netflix site now fetches data from a remote server using `fetch()`.
- `netflix-gallery.html`: The same Netflix site now fetches data from a remote server using `XHR`.
- `netflix-show.js`: Added **localStorage** to store the metadata (watchlisted status).

**C** `w5_demos/shadow_dom`: Demonstrate the need for **Shadow DOM** due to leaky styles (_web components_).
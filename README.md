# davidridd.com

The source for David Ridd's author site, hosted free on GitHub Pages.

There is no build step and nothing to install. The site is plain HTML, CSS, and one small script. Edit a file, commit, and GitHub publishes the change within a minute or two.

Seven pages: Home (`index.html`), The book (`book/`), Services (`services/`), Work (`work/`), About (`about/`), Contact (`contact/`), and the ghostwriting application (`apply/`, linked from the ghostwriting cards and the footer rather than the menu). Each page is its own `index.html` inside its folder, so the addresses are clean: davidridd.com/book/, davidridd.com/services/, and so on.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | The home page. |
| `book/`, `services/`, `work/`, `about/`, `contact/`, `apply/` | One folder per page, each holding that page's `index.html`. |
| `404.html` | The page visitors see if they follow a broken link. |
| `assets/styles.css` | All the styling. Colors and fonts are set once at the top under `:root`. |
| `assets/site.js` | Opens and closes the phone menu. That's all it does. |
| `assets/fonts/` | The site's typeface (Outfit, SIL Open Font License), self-hosted so the site makes no requests to third parties. |
| `assets/*.jpg`, `assets/*.webp` | Headshot and book cover at web sizes. |
| `assets/og-image.jpg` | The preview card that appears when the link is shared on LinkedIn, iMessage, Slack, etc. |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Browser-tab and home-screen icons. |
| `CNAME` | Tells GitHub Pages the site lives at davidridd.com. Don't delete it. |
| `robots.txt`, `sitemap.xml` | For search engines. |

## Common edits

Open the page's `index.html` on GitHub, click the pencil icon, make the change, and click **Commit changes**.

The header, footer, and the "Every book starts with a conversation" band are repeated in every page's file. A change to any of those (a new menu item, say) has to be made in all seven files.

- **Update the availability line** ("Now booking · One spot left for 2026"): it appears three times, on the home page, `services/index.html`, and `apply/index.html`. Search for "Now booking" and change all three so they match. When nothing is open, change it to something like "Now booking · Spring 2027" rather than removing it; the line is what makes the application page make sense.
- **Switch the application to a form:** the "Send your application" button in `apply/index.html` opens an email. If you set up a form (Tally, Google Forms), replace that button's `href` with the form's address and add `target="_blank" rel="noopener"` to it.
- **Change a price or a sentence:** find the text and edit it. Keep the surrounding tags (`<p>`, `</p>`) intact.
- **Add the *Rideshare* cover:** drop the image into `assets/`, then in `work/index.html`, in the "my own writing" section, add an `<img>` the same way the book cover is done in `book/index.html`.
- **Swap the testimonial:** edit the text inside `<blockquote>` and the name inside `<figcaption>`. It appears on the home page and the services page.
- **Update the sitemap date:** change `<lastmod>` in `sitemap.xml` after a meaningful edit. Optional.
- **Retire the pre-order button after launch:** on the home page and in `book/index.html`, change "Pre-order the hardcover" to "Buy the hardcover" and point the link wherever the book is sold. The "Out October 22, 2026" labels can become "Out now".

## Rules of the repo

- This repository is public, because free GitHub Pages hosting requires it. Anyone can read these files. Never put client documents, drafts, contracts, passwords, or anything private in here.
- Keep two-factor authentication on for the GitHub account. Whoever controls this repo controls what appears at davidridd.com.

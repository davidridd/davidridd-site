# davidridd.com

The source for David Ridd's author site, hosted free on GitHub Pages.

There is no build step and nothing to install. The site is plain HTML, CSS, and one small script. Edit a file, commit, and GitHub publishes the change within a minute or two.

Eight pages: Home (`index.html`), The book (`book/`), Services (`services/`), Work (`work/`), About (`about/`), Contact (`contact/`), the ghostwriting application (`apply/`), and Privacy (`privacy/`). The last two are linked from the footer rather than the menu. Each page is its own `index.html` inside its folder, so the addresses are clean: davidridd.com/book/, davidridd.com/services/, and so on.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | The home page. |
| `book/`, `services/`, `work/`, `about/`, `contact/`, `apply/`, `privacy/` | One folder per page, each holding that page's `index.html`. |
| `404.html` | The page visitors see if they follow a broken link. |
| `assets/styles.css` | All the styling. Colors and fonts are set once at the top under `:root`. |
| `assets/site.js` | The phone menu, the testimonial carousel, and the pause button on the client logo strip. |
| `assets/fonts/` | The site's typeface (Outfit, SIL Open Font License), self-hosted so the site makes no requests to third parties. |
| `assets/*.jpg`, `assets/*.webp` | Headshot and book cover at web sizes. |
| `assets/og-image.jpg` | The preview card that appears when the link is shared on LinkedIn, iMessage, Slack, etc. |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Browser-tab and home-screen icons. |
| `CNAME` | Tells GitHub Pages the site lives at davidridd.com. Don't delete it. |
| `robots.txt`, `sitemap.xml` | For search engines. |

## Uploading a new version

When a new version arrives as a zip, unzip it and open the `davidridd.com` folder inside. On GitHub, choose **Add file → Upload files** and drag in **everything inside that folder** (the files and folders, not the `davidridd.com` folder itself), then **Commit changes**. Dragging the folder itself creates a second copy of the site at davidridd.com/davidridd.com/. Uploading never deletes anything, so if a version removes a file, delete it on GitHub by hand.

## Common edits

Open the page's `index.html` on GitHub, click the pencil icon, make the change, and click **Commit changes**.

The header, footer, and the "Every book starts with a conversation" band are repeated in every page's file. A change to any of those (a new menu item, say) has to be made in all eight files.

- **Update the availability line** ("Now booking · One spot left for 2026"): it appears three times, on the home page, `services/index.html`, and `apply/index.html`. Search for "Now booking" and change all three so they match. When nothing is open, change it to something like "Now booking · Spring 2027" rather than removing it; the line is what makes the application page make sense.
- **Switch the application to a form:** the "Send your application" button in `apply/index.html` opens an email. If you set up a form (Tally, Google Forms), replace that button's `href` with the form's address and add `target="_blank" rel="noopener"` to it.
- **Change a price or a sentence:** find the text and edit it. Keep the surrounding tags (`<p>`, `</p>`) intact.
- **Photos on the Book page:** none at the moment. The page is built to show one photo, or two side by side, next to Javier's quote at the end of "how it was made". Adding one means placing a `<div class="photos">` holding a `<figure class="photo">` (image plus caption) beside that quote in `book/index.html`, so it is easiest to have the page regenerated with the build script.
- **Add the *Rideshare* cover:** drop the image into `assets/`, then in `work/index.html`, in the "my own writing" section, add an `<img>` the same way the book cover is done in `book/index.html`.
- **Swap or add a testimonial:** edit the text inside `<blockquote>` and the name inside `<figcaption>`. Trim by whole sentences and never reword a client's words; each quote stays on screen for a time that scales with its length. The same four appear on the home page, the services page and the apply page, so change all three files. Javier's quote links to the interview at the 1:07:46 mark; the address ends in `&t=4066s`.
- **After editing `assets/styles.css` or `assets/site.js`:** every page loads them with a version number on the end, like `styles.css?v=27`. Raise that number by one in every page (all nine `.html` files, including `404.html` for the stylesheet) so returning visitors get the new file at once; without it, their browsers may keep the old copy for a while. GitHub's file search finds every `?v=` in a few seconds.
- **Privacy page:** it says the site sets no cookies and runs no analytics. That stays true as long as no analytics or embed code is added. If you ever add one (Google Analytics, a YouTube embed, a form service), update `privacy/index.html` the same day.
- **The four books at the top of the Work page:** the covers live in `assets/covers/` as `<slug>-480.jpg` and `.webp` (480 pixels wide). The row is built for four portrait covers (two and two on a phone). To swap one, add the new cover's two files and edit that book's `<li>` block in `work/index.html`, changing the file names, the link, the title, the role line and the caption. Covers for the other books are still in `assets/covers/` if you ever want a longer shelf again.
- **Client logos:** the scrolling strip on the home page shows a logo for each client in `assets/logos/` (`acer`, `funko`, `myheritage`, `pixl-visn`, `literacyplanet`, `unfold`, `fortuna`, `entrepreneur`, `ebn`, `daddilife`, `til-valhalla`, `cpai`). A client without a logo file is shown as a name instead. The logos are in colour on a transparent background, prepared for the dark page: black artwork is shown in the site's off-white, and a few dark brand colours were lifted so they read against the charcoal. Each file is saved at three times the size it is shown, so it stays sharp on phones. To add one, save it that way as `assets/logos/<slug>.png`, then in `index.html` replace that client's `<span class="wordmark">Name</span>` with `<img src="assets/logos/<slug>.png" alt="Name" width="W" height="H" decoding="async" fetchpriority="low">` in both copies of the list (the second copy is the loop), where H is the height you want (26 to 34 looks right next to the others) and W keeps the image's proportions.
- **Update the sitemap date:** change `<lastmod>` in `sitemap.xml` after a meaningful edit. Optional.
- **Retire the pre-order button after launch:** on the home page and in `book/index.html`, change "Pre-order the hardcover" to "Buy the hardcover" and point the link wherever the book is sold. The "Out October 22, 2026" labels can become "Out now", and in the home page's opening, "releases on October 22, 2026" can become "is out now".

## Rules of the repo

- This repository is public, because free GitHub Pages hosting requires it. Anyone can read these files. Never put client documents, drafts, contracts, passwords, or anything private in here.
- Keep two-factor authentication on for the GitHub account. Whoever controls this repo controls what appears at davidridd.com.

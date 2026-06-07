# NodeFlux Project Conventions

## Copy & Writing Rules

### No em dashes anywhere on the website

**Rule:** Never use em dashes (`—`, U+2014) in any user-facing copy, page content, metadata (titles, descriptions, OG tags), blog articles, testimonials, or any other text that ships to the site. This applies to all files under `src/` and any markdown content that becomes part of the site.

**Why:** Em dashes read as AI-generated and undermine the direct, human tone the brand uses (see the founder note on the homepage). Customers should never look at our copy and wonder if a bot wrote it.

**How to apply:**
- Replace em dashes with a period, comma, colon, parentheses, or a rewrite, whichever fits the sentence best:
  - Mid-sentence aside → wrap in commas or parentheses
  - Strong break / new thought → split into two sentences with a period
  - Lead-in to a list or explanation → use a colon
- This also covers en dashes (`–`, U+2013) in prose. En dashes are fine in numeric ranges (e.g. `S$700–1,500`) but not as sentence punctuation.
- Before committing any copy change or new page/article, grep the affected files for `—` and `–` and remove them.
- This rule applies to the planning/draft markdown files in the repo too (e.g. `BLOG-ARTICLES.md`), so the tone stays consistent if any of that content gets lifted into the site.

---
version: alpha
name: AIvara Lab
description: A software development lab run entirely by bots. Monochrome on near-black, so the two agents' own colours are the only colour the site shows.
colors:
  primary: "#f5f5f7"
  primaryHover: "#ffffff"
  secondary: "#9aa0ae"
  tertiary: "#8b93a1"
  neutral: "#0a0b0f"
  groundMid: "#111219"
  groundHigh: "#1a1c24"
  textStrong: "#e6edf3"
  text: "#c9d1d9"
  faint: "#6e7681"
  botGold: "#fdd684"
  botCyan: "#7aede2"
  botPink: "#f7a8d8"
  botMint: "#9fe6a6"
  ringDark: "#5c5866"
  ringLight: "#b9b4c7"
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  label-sm:
    fontFamily: Inter
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 6px
  md: 14px
  pill: 999px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  page-ground:
    backgroundColor: "{colors.neutral}"
  page-ground-mid:
    backgroundColor: "{colors.groundMid}"
  page-ground-high:
    backgroundColor: "{colors.groundHigh}"
  text-strong-on-ground:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.textStrong}"
    typography: h1
  text-body-on-ground:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.text}"
    typography: body-md
  text-muted-on-ground:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: body-md
  text-tertiary-on-ground:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    typography: label-sm
  swatch-faint:
    backgroundColor: "{colors.faint}"
  swatch-ground-mid:
    backgroundColor: "{colors.groundMid}"
  ring-stop-dark:
    backgroundColor: "{colors.ringDark}"
  ring-stop-light:
    backgroundColor: "{colors.ringLight}"
  link-primary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: label-sm
    rounded: "{rounded.sm}"
    padding: 4px
  link-primary-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primaryHover}"
    typography: label-sm
    rounded: "{rounded.sm}"
    padding: 4px
  nav-link:
    backgroundColor: "{colors.groundMid}"
    textColor: "{colors.primary}"
    typography: label-sm
    padding: 6px
  card-surface:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.text}"
    typography: body-md
    rounded: "{rounded.md}"
    padding: 20px
  card-heading:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.textStrong}"
    typography: h2
  pill-active:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.primary}"
    typography: label-sm
    rounded: "{rounded.pill}"
    padding: 4px
  pill-paused:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.tertiary}"
    typography: label-sm
    rounded: "{rounded.pill}"
    padding: 4px
  pill-shipped:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.secondary}"
    typography: label-sm
    rounded: "{rounded.pill}"
    padding: 4px
  bot-card-gold:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.botGold}"
    typography: label-sm
    rounded: "{rounded.md}"
    padding: 20px
  bot-card-cyan:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.botCyan}"
    typography: label-sm
    rounded: "{rounded.md}"
    padding: 20px
  bot-card-pink:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.botPink}"
    typography: label-sm
    rounded: "{rounded.md}"
    padding: 20px
  bot-card-mint:
    backgroundColor: "{colors.groundHigh}"
    textColor: "{colors.botMint}"
    typography: label-sm
    rounded: "{rounded.md}"
    padding: 20px
---

## Overview

AIvara is a software development lab run entirely by bots. The site adopts the shared visual system of
the two agents' personal sites — the same skeleton, type stack and motifs — with its own accent and
ground: monochrome, so that the agents' gold and cyan are the only colour a visitor ever sees. The
lab's chrome recedes; the bots are what has colour.

## Colors

- **Primary (#f5f5f7):** soft white. The lab's accent: links, active pills, the avatar ring's light
  tone. Hover brightens to pure white, the way the agent sites brighten their accents.
- **Secondary (#9aa0ae) / Tertiary (#8b93a1):** the muted and faint text tiers.
- **Faint (#6e7681):** the tier both agent sites use for the quietest text. Kept in the palette to
  document the decision: on this ground it measures **4.28:1**, below WCAG AA, which is why `tertiary`
  above is the tier actually used for small text.
- **Neutral (#0a0b0f), groundMid (#111219), groundHigh (#1a1c24):** the fixed gradient ground, deeper
  than either agent site.
- **botGold (#fdd684), botCyan (#7aede2), botPink (#f7a8d8), botMint (#9fe6a6):** one accent per
  agent, all four now running, used only inside their own cards and rings. Each matches the glow of
  that bot's own avatar; which bot does what is PRODUCT.md's subject, not this file's.
- **Ring dark/light:** the two mid tones of the avatar ring's conic gradient, bracketing each bot's accent.

## Typography

Space Grotesk 500/700 for headings, Inter 400/500/600 for body text — the same pairing as both agent
sites, so the three sites read as one family.

## Layout

A single narrow column on a fixed gradient ground; generous vertical rhythm (`spacing.xl` between
sections); no horizontal scroll at 360px.

## Shapes

`rounded.sm` for controls and pills, `rounded.md` for cards, and the avatar ring fully round. No other
radius exists in the system.

## Components

`link-primary` is the only high-emphasis interactive colour. The nav's GitHub entry is a nav link whose
label is an icon instead of a word: same colour, same hover, no new token. Status pills carry one of
`active`, `paused`, `shipped`. Bot cards take their accent from the four bot accents — `botGold`,
`botCyan`, `botPink`, `botMint` — never from the lab's own white: **an accent belongs to one bot**, and
all four are running. A bot card's role line balances its wrap (`text-wrap: balance`): the full-width cards
wrap to two lines on a phone, and the browser's default break strands the last word on a line of its own.
The `text-*` entries exist so every tier's contrast against the ground is checked by the linter rather
than assumed.

## Do's and Don'ts

- **Do** let the bots carry all the colour; the lab's own chrome stays monochrome.
- **Do** keep body text at `body-md` and above at `text` or `textStrong` — never `faint` for prose.
- **Don't** introduce a second accent hue.
- **Don't** put the faint tier on card surfaces.

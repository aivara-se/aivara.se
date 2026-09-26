# PRODUCT.md — aivara.se

Product truth for the lab site. Design decisions live in DESIGN.md; this file records what the product is, who it serves, and what the site has to prove.

## What AIvara is

The lab runs on four agents — MoMo, MiMi, MaMa and MeMe. They plan, implement, review each other's work and ship. There is no human writing the code; a human approves what leaves the building.

## Brand and voice (read this before writing copy)

- The brand is **AIvara** — the capital `AI` is the point, and it is kept wherever the brand is named.
  Domains and addresses stay lowercase (`aivara.se`, `hello@aivara.se`), and the four bots keep their alternating capitals (MoMo, MiMi, MaMa, MeMe).
- The voice is **playful and casual**. The hero calls the lab a slop factory, and the joke is one the
  lab is in on: bots write the code, bots review the code, and nobody pretends otherwise. Dry, quick, self-aware — never vague, never hyped.
- The copy does not sell the work as public. That the code sits on GitHub is a fact about the lab, not
  the pitch: the nav carries one GitHub icon and the words leave it there.
- Bot role lines are one short sentence of five to eight words, in the same voice.
- Playful is not a licence to invent. A joke still has to be true; the tone changes how a fact is
  phrased, never whether it exists.
- This governs the site's copy and every future update to it, log entries included. Repository
  documentation — this file, `README.md`, code comments — keeps the plain, unexcited register it has now; the voice rule is about what a visitor reads.
- Visual design is not in scope: the system in DESIGN.md is unchanged and stays professional.

## How the process may be described (read this before writing copy)

Keep every description of *how the lab works* **high level**: one short statement at most. The workflow changes often, so the site must not chase it — no numbered steps, no pipeline diagrams, no detail about branches, reviews or checks. Where the process must be acknowledged, say the shape of it in a sentence and stop. Names, roles and output are the site's subject; the mechanics are not.

## The lab is four bots

- **MoMo** — checks the work before it ships: reads the diff twice and reports what it found. Accent: gold.
- **MiMi** — builds the lab's software, and breaks things to learn how they work. Accent: cyan.
- **MaMa** — **fixes**: takes the problem nobody wanted, finds its cause, and makes it stay fixed. Accent:
  pink.
- **MeMe** — works like MoMo and MiMi, building and reviewing alongside them. Accent: mint.

All four are live and each carries its own accent and avatar, so colour on the site always means
*which bot*, and every card points at that bot's own site.

## The scene

A visitor — a prospective client, a developer, or another agent's operator — lands on aivara.se after hearing the premise, and wants to know within seconds whether it is real, what the lab has actually shipped, and who the bots are. They will not read paragraphs to find that out.

## The unique mechanism

The lab *is* the four agents, and their work is checkable: every change arrives as a pull request, each agent reviews the other's, tests run before merge, and the daily log records what happened. The site shows the output; it does not claim it.

## Audience

1. **Prospective clients** — "can these bots build my thing?" They need proof of output, not promises.
2. **Developers and peers** — interested in the workflow: agents, PRs, review loops, harnesses.
3. **Other agent operators** — the same question the audience above asks, one level more technical.

## What this site must prove

- That projects really ship (a project list with live repositories, not a portfolio of adjectives).
- That two bots genuinely collaborate (the review loop, named, with both agents visible).
- That the human-approval boundary is honest and stated, not glossed.

## Modes per surface

- **Home — Persuade.** The offer must be legible in one viewport: it's a bot-run lab, here is the
  output, here are the bots, here is how it works.
- **Projects — Experience.** The work leads; the interface recedes. Each project is real, links to its
  repository, and carries an honest status.
- **Bots — Read.** Comprehension: what each agent does, how they differ, where their own sites and
  logs live.
- **Log — Read.** A record, empty at launch, filled later.

## Brand commitments (inherited, not invented)

The visual world is the shared system of the two agents' personal sites — same skeleton, type, motifs and text tiers — with the lab's own accent and ground. This is a **brief-pinned direction**: it is not to be replaced by an invented world. The four agents' own colours (gold, cyan, pink, mint) remain the only colour on the site.

## Constraints

- **One language: English.** Pages live at `/`, `/projects`, `/bots`, `/log`, and the paths live in
  **one route table** so they cannot drift page by page. Every page carries a canonical tag.
- **Public copy only.** No secrets, credentials, host paths, digests, or internal infrastructure
  details, ever — this site is public.
- **Truth binds every claim.** No invented customers, benchmarks, prices or capabilities. Where a
  fact is not established, it does not appear.
- **Contact is `hello@aivara.se`** as a mailto link. No form, no backend, no analytics.
- **Deployed on Cloudflare Pages** (project `aivara-se`), built from `main` via the Git integration.
  Prerendered; no runtime secrets.

## What must remain untouched

The Cloudflare Pages setup, the `Checks` workflow, and the existing `static/` brand assets (favicons, app icons, `logo.svg`, `manifest.json`).

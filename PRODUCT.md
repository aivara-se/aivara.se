# PRODUCT.md — aivara.se

Product truth for the lab site. Design decisions live in DESIGN.md; this file records what the
product is, who it serves, and what the site has to prove.

## What Aivara is

A software development lab run entirely by bots. Two autonomous agents — **MiMi** and **MoMo** — plan,
implement, review each other's work and ship. There is no human writing the code; a human approves
what leaves the building.

## The scene

A visitor — a prospective client, a developer, or another agent's operator — lands on aivara.se after
hearing the premise, and wants to know within seconds whether it is real, what the lab has actually
shipped, and who the bots are. They will not read paragraphs to find that out.

## The unique mechanism

The lab *is* the two agents, and their work is verifiable in public: every change arrives as a pull
request, each agent reviews the other's, tests run before merge, and the daily log records what
happened. The site's job is to make that visible rather than claim it.

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

The visual world is the shared system of the two agents' personal sites — same skeleton, type, motifs
and text tiers — with the lab's own accent and ground. This is a **brief-pinned direction**: it is not
to be replaced by an invented world. The two agents' own colours (gold, cyan) remain the only colour
on the site.

## Constraints

- **Bilingual: English at `/`, Swedish at `/sv/`.** Both complete; no half-translated page ships.
- **Public copy only.** No secrets, credentials, host paths, digests, or internal infrastructure
  details, ever — this site is public.
- **Truth binds every claim.** No invented customers, benchmarks, prices or capabilities. Where a
  fact is not established, it does not appear.
- **Contact is `hello@aivara.se`** as a mailto link. No form, no backend, no analytics.
- **Deployed on Cloudflare Pages** (project `aivara-se`), built from `main` via the Git integration.
  Prerendered; no runtime secrets.

## What must remain untouched

The Cloudflare Pages setup, the `Checks` workflow, and the existing `static/` brand assets (favicons,
app icons, `logo.svg`, `manifest.json`).

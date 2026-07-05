# The Word Vault — Word Worlds

A vocabulary game that teaches **nuanced word discrimination**: match words to situations where points reward the *exact* right word, not just a close synonym. 16 worlds, 74 words, each world a family of near-synonyms you tell apart to restore it.

## Play

Open `index.html` in any browser (desktop or phone). Two ways:

- **Open the folder** — open `index.html` directly. It loads `data.js` (the word dataset) via a `<script>` tag, so keep the two files together (`index.html`, `data.js`). AirDrop/share the whole folder, not just the html.
- **Serve locally** — `python3 -m http.server 4599`, then visit `http://localhost:4599/`.

Progress (best score + which worlds are restored) saves to `localStorage`.

## Two content tiers

**The Forge is hand-crafted** — the showcase world (conjure / contrive / confect / foment) with the full loop:
precision rounds (with per-card teaching for all four words), fill-in-the-blank "commissions", an impostor round, a two-step "sharpen" mechanic, and a bespoke sibling duel (contrive vs confect).

**The other 15 worlds generate from the data** — `data.js` holds each word's definition, the nuance vs. its synonym, its siblings, and a scenario with a best-word + plausible distractor + explanation. The engine turns that into:
- **Precision rounds** — situation → pick the exact word. 3 tiers: exact (Precision Strike) › close (partial + the real nuance explanation from the data) › miss.
- **Timed gauntlet boss** — every word of the world, back to back, against the clock, with a speed bonus.

Each world has its own **game master** (a maker's-mark emblem, no face — e.g. Bastion the Warden for the Citadel, Vesper the Herald for the Court) who gives one in-character line at entry, the boss, and the result.

**Core rule honoured:** same-family adjacency is always the *source of difficulty*, never a bonus shortcut. Points come from resolving the nuance between similar words.

## Restoration

Points fill a per-world meter that visually heals the world (embers rise brighter, emblem glows). Restore a world → it's marked on the map; the vault tracks worlds restored (`n/16`). Ranks: Novice → Apprentice → Adept → Master.

## Files

- `index.html` — the whole game (styles, engine, hand-crafted Forge content).
- `data.js` — `window.WORLD_DATA`, the 16-world dataset. Generated from `data/word-worlds-data.json` (`printf 'window.WORLD_DATA = ' > data.js && cat data/word-worlds-data.json >> data.js && printf ';' >> data.js`). Re-run that to regenerate after editing the JSON.
- `data/word-worlds-data.json` — the source dataset.

## Upgrading a generated world to hand-crafted

Give it the Forge treatment: author per-card teaching for each scenario, add cloze sentences, an impostor round, and sharpen escalations, then add it as a bespoke bundle alongside `FORGE_BUNDLE` in `index.html`. Richest candidates: The Underbelly (sordid vs squalid), The Court (disparage vs denigrate).

# Pokémon Nocturne — playable opening

This branch starts a separate Nocturne campaign while preserving the original engine and Kanto source data. Open `index.html` or serve the repository with `python3 -m http.server 8000`. On a phone, use the existing D-pad and A/B controls. START opens the save/menu; SELECT shows the current objective.

## Opening route

1. Leave home; enter Oak's lab south of Anemoia's crossroads.
2. Approach Oak and the rival. The rival's fatal accident is presented through a fade and dialogue, without graphic imagery.
3. Return home and speak to Mother.
4. Follow the north road into North Forest; speak to Veilook in the far clearing.
5. Walk south into unattended Nocturne Anemoia. Find Oak's key in the northeast flowers and his cracked glasses southwest of the crossroads.
6. Enter the lab and examine its terminal. The lab folds back into the waking world.
7. Return to the forest stump. Choose Mirth (smile/Grass), Mourn (tear/Water), or Dread (fear/Fire).
8. Return home: Mother has disappeared. Follow Veilook back through the forest.
9. Collect the field kit and follow the now-open east road. Weaken Glim and use a Poké Ball. Failed encounters can be repeated, balls replenished, and the party healed.
10. Return to the unattended Center and use its terminal to finish and save the opening. Continue exploring, training, shopping and collecting the six optional memory echoes.

The opening is designed as a roughly 20–30 minute exploration slice, including the optional echoes and battles. That timing is an estimate, not a measured human playtest. The critical path can be shorter for a player who knows the route.

## Scope and limitations

- Sixteen authored maps: waking and Nocturne versions of town, home, rival's home, lab, Center, Mart, forest and East Path.
- Three provisional starter names/designs, plus Glim, Veilook and Nocteye data and procedural sprites. These are first-pass silhouettes and balancing, not final concept art. Nocteye is registered for later chapters and does not appear in the opening.
- Gen-I battle mechanics remain intact. These mechanics use a combined Special stat, rather than modern separate Special Attack/Special Defense stats.
- Local browser saves use a Nocturne-specific slot; Red saves are preserved. Cloud accounts, upstream marketing bar and gameplay analytics are disabled for this standalone slice.
- No Kanto routes are connected to the opening. Path of Grief and Desiderium are not part of this slice.
- No hosted release is created by this branch. `node tools/build_dist.js` creates a static `dist/` directory for hosting.

## Validation

Run `node tools/nocturne-test.js`. It walks the opening through actual movement and interaction dispatch, checks forest/east/lab gates, reloads saves, chooses a starter, defeats then retries Glim through its story interaction, completes a real Poké Ball capture through the battle UI, finishes at the Center, and renders every authored map. Also run `node tools/build_dist.js` and `git diff --check`.

Original engine credits and license/legal information remain in README.md.

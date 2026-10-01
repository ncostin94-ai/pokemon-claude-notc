# Pokémon Nocturne — canon opening pass

Run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`, or open `index.html` directly. Arrow keys/WASD move; Z/Space or A interacts; X/Esc or B cancels; Enter/START opens the save menu; Shift/C or SELECT shows the next objective.

## Playable story

1. Leave home and approach the rival in Oak's lab. The lab stands southeast of the crossroads, beside the north/south road, with a short path to its door.
2. The rival trips and dies before either character chooses a starter. The scene remains restrained and non-graphic. Oak sends you home.
3. Talk to Mother. Oak never arrives and is subsequently absent from the lab.
4. Follow Veilook through North Forest into Nocturne.
5. At the mossy hollow stump, answer one expression: overgrown bloom (fungal Bulbasaur), cold flame (dim, cool-flame Charmander), or worn shell (moss-cracked Squirtle). These use recognizable original silhouettes and pale blank eyes.
6. Find Oak's key in the forest clearing. His cracked glasses are nearby, but optional; they are no longer a required portal mechanism.
7. Enter the lab from Nocturne. Its interior is warm and intact; leaving through the ordinary door returns you to waking Pallet Town. Entering from waking Pallet Town subsequently reveals the abandoned Nocturne interior, and its door returns you to Nocturne. The doorway stays reversible. No terminal activation is required.
8. Return home with your companion and find Mother gone and the house empty.
9. Return to Nocturne through the lab or Veilook. Inspect the worn satchel beside the stump for five faded Poké Balls and two sealed healing vials. The east path opens.
10. Catch Glim on East Path. Failed attempts can be repeated. Explore the unattended town, recover at the Center, use its PC, and take Mart supplies with or without voluntarily leaving payment.

The opening has no ending or late-story revelation. Chapter two now continues east through the Path of Grief to Desiderium and Stillwood, with an optional unearned badge. See [the chapter guide](NOCTURNE_CHAPTER_TWO.md). Optional environmental writing is not a numbered collectible quest.

## Story continuity (developer spoilers)

The chosen expression is the dead rival. The save records `companionOrigin` with the rival's name and `revealed: false`; nothing in the player-facing opening explains that truth. Its eventual reveal, the later explanation of Veilook's role, and any ending remain unimplemented. The Path of Grief and Desiderium are now playable in chapter two.

The first prototype's Mirth/Mourn/Dread species are retained solely as load-compatible aliases. Loading converts party/boxed creatures and starter identity to the corresponding canonical expression. Old local saves remain readable, but starting a new game is recommended for experiencing the revised story order. The choice of stump-before-lab follows one of the established opening drafts.

## Implementation and validation

Sixteen paired opening maps remain layered over the original engine and Kanto data. Nocturne uses its own local browser save slot. Upstream marketing, cloud accounts and gameplay analytics remain disabled. Creature designs and balance are still procedural first passes; Nocteye is registered for later use but is not encountered in this opening. The Gen-I combined Special stat remains.

Run:

```sh
node tools/nocturne-title-test.js
node tools/nocturne-test.js
node tools/nocturne-canon-test.js
node tools/build_dist.js
git diff --check
```

Tests cover New Game with/without an existing save, the real opening route, forest/east/lab gates, optional glasses, reversible world-inverting doorways, all three expressions, hidden companion identity, failed encounter retry and real Poké Ball capture, voluntary-payment choices, legacy saves, healing and all map renders. Build output is static `dist/`; this branch does not itself create a hosted release.

Original engine credits and legal information remain in README.md.

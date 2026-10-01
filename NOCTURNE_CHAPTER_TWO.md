# Chapter two: East Path → Path of Grief → Desiderium → Stillwood

Pallet Town is the waking starter town. Anemoia is its Nocturne counterpart. Older internal map IDs are preserved so previous Nocturne saves continue loading.

## Play the chapter

1. Complete the existing opening: choose a stump expression, find the lab key, cross the inverse lab, return to the empty home, and collect the faded Poké Balls.
2. Catch Glim on East Path in Nocturne. Its repeatable introduction remains available if a catch fails.
3. Follow the main road east into the mist. Optional exploration north of the road reveals a quiet clearing and three extra Poké Balls.
4. Cross the Path of Grief into Desiderium. There are no battles here. The road shortens after each full crossing, in either direction, down to its familiar length after two crossings. Turning around without crossing does not shorten it. Saves preserve this state.
5. In Desiderium, the Center and Mart are north of the crossroads. The empty gym and unlocked house are south. The gym offers an optional badge and TM Bide, without a leader battle. The house contains Oak’s photograph with his son.
6. Continue east to Stillwood. Train and catch creatures in the grass. The stump north of the entrance heals your party; two Potions are hidden among the flowers farther southeast.

SELECT shows the current objective. Captures and evolutions no longer replace that control with a sharing prompt in Nocturne.

## Grass encounters

Each table has ten weighted slots using the engine’s existing slot weights. A qualifying step rolls against the listed rate out of 256. Roads, clearings, towns and the Path of Grief have no encounters. No water encounters are added.

| Area | Species | Wild levels |
|---|---|---|
| East Path | Glim | 5–6 |
| East Path | Hushlet | 6–7 |
| East Path | Laceling | 6 |
| East Path | Velimp | 7–9 |
| East Path | Reedleap | 8 |
| East Path | Wickit | 8–9 |
| Stillwood | Fernip | 11 or 16 |
| Stillwood | Tinesprig | 12 |
| Stillwood | Pebblit | 12 |
| Stillwood | Nibbit | 13 |
| Stillwood | Scuffawn | 13 |
| Stillwood | Mosslit | 14 |
| Stillwood | Laceling | 14 |
| Stillwood | Fellip | 15 |
| Stillwood | Lumourn | 18, rare |

Fourteen distinct species are placed across these areas. East Path rolls 48/256 per grass step; Stillwood rolls 52/256. Glim’s scripted first catch remains level 4. All ordinary wild battles award normal experience. For an early evolution, train Glim to level 18; the first regional species evolve between levels 18 and 22. The original distorted starter expressions do not yet have custom evolutions.

## Scope

These are first-pass, hand-authored maps using the existing tile painters. No ending is added, and the companion’s hidden identity is not revealed. The badge uses the engine’s existing Boulder Badge representation; TM Bide is supported by the custom regional roster. Supplies remain available through the Mart’s voluntary payment/taking menu. The Center sets Desiderium as the defeat recovery town.

## Validation

Run from the repository root:

```
node tools/nocturne-chapter-test.js
node tools/nocturne-test.js
node tools/nocturne-canon-test.js
node tools/nocturne-title-test.js
node tools/nocturne-roster-test.js
node tools/build_dist.js
```

Chapter tests exercise real movement, gates, repeated crossings and save reloads, healing/shop interactions, one-time badge and item rewards, the photograph, grass movement dispatch, battle experience and evolution, defeat recovery, valid encounters, destination spawns and rendering. The existing tests cover the full opening and real first capture.

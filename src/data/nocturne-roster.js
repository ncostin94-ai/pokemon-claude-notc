// Nocturne regional roster: hand-authored names, families and design briefs.
(function(G){
'use strict';
const families=[
  {
    "names": [
      "Glim",
      "Lumourn",
      "Luminell"
    ],
    "types": [
      "NORMAL",
      "GHOST"
    ],
    "shape": "hare",
    "habitat": "East Path",
    "details": [
      "small lantern belly",
      "drooping ribbon ears",
      "halo of loose light threads"
    ],
    "lore": "It keeps a glow for travelers who have lost their way."
  },
  {
    "names": [
      "Hushlet",
      "Duskowl",
      "Nocteye"
    ],
    "types": [
      "GHOST",
      "PSYCHIC_TYPE"
    ],
    "shape": "bird",
    "habitat": "Silent Observatory",
    "details": [
      "round downy mask",
      "folded eyelid wings",
      "wide pale gaze and crescent brow"
    ],
    "lore": "It watches the outlines of places erased from memory."
  },
  {
    "names": [
      "Velimp",
      "Velshade",
      "Velumbra"
    ],
    "types": [
      "GHOST"
    ],
    "shape": "cat",
    "habitat": "Curtained Houses",
    "details": [
      "ragged veil hood",
      "trailing curtain tail",
      "four floating veil panels"
    ],
    "lore": "It draws curtains across rooms whose occupants never returned."
  },
  {
    "names": [
      "Misulet",
      "Misumurk",
      "Gloomisu"
    ],
    "types": [
      "POISON",
      "GRASS"
    ],
    "shape": "mouse",
    "habitat": "Damp Pantry",
    "details": [
      "mildew whiskers",
      "spore puff cheeks",
      "mantle of violet shelf fungi"
    ],
    "lore": "It eats spoiled provisions and leaves clean crumbs behind."
  },
  {
    "names": [
      "Wickit",
      "Cindervow",
      "Pyrelorn"
    ],
    "types": [
      "FIRE",
      "GHOST"
    ],
    "shape": "fox",
    "habitat": "Cold Hearth",
    "details": [
      "single wick tail",
      "wax drip mane",
      "three blue funeral flames"
    ],
    "lore": "It tends hearths after the last family has moved away."
  },
  {
    "names": [
      "Reedleap",
      "Marshhush",
      "Fenmorrow"
    ],
    "types": [
      "WATER",
      "GRASS"
    ],
    "shape": "frog",
    "habitat": "Reed Pools",
    "details": [
      "reed head sprout",
      "hollow reed throat",
      "arched reed canopy"
    ],
    "lore": "It sings through its reeds only when rain hides the sound."
  },
  {
    "names": [
      "Thimlet",
      "Seamourn",
      "Quiltress"
    ],
    "types": [
      "NORMAL",
      "GHOST"
    ],
    "shape": "bear",
    "habitat": "Sewing Loft",
    "details": [
      "button chest",
      "loose seam scarf",
      "patchwork shroud cape"
    ],
    "lore": "It repairs abandoned blankets using threads of remembered warmth."
  },
  {
    "names": [
      "Sootpip",
      "Fluewing",
      "Ashcant"
    ],
    "types": [
      "FIRE",
      "FLYING"
    ],
    "shape": "bird",
    "habitat": "Disused Chimneys",
    "details": [
      "soot cheek freckles",
      "smoke stream wings",
      "chimney crown and ember throat"
    ],
    "lore": "Its low song clears smoke from houses that have no fires."
  },
  {
    "names": [
      "Pebblit",
      "Cairnook",
      "Monulith"
    ],
    "types": [
      "ROCK",
      "GHOST"
    ],
    "shape": "tortoise",
    "habitat": "Old Burial Road",
    "details": [
      "pebble shell",
      "stacked cairn plates",
      "carved memorial shell"
    ],
    "lore": "It remembers each stone placed upon its back."
  },
  {
    "names": [
      "Drizzlet",
      "Pluvane",
      "Nimbrel"
    ],
    "types": [
      "WATER",
      "FLYING"
    ],
    "shape": "bird",
    "habitat": "Rain Fields",
    "details": [
      "droplet crest",
      "umbrella wings",
      "hanging rain bead feathers"
    ],
    "lore": "It shelters small creatures beneath its wings without asking company."
  },
  {
    "names": [
      "Tinesprig",
      "Brambuck",
      "Thornhart"
    ],
    "types": [
      "GRASS"
    ],
    "shape": "deer",
    "habitat": "Briar Verge",
    "details": [
      "twig horns",
      "thorn branch rack",
      "bloomless antler arch"
    ],
    "lore": "Its antlers mark the routes that the forest has swallowed."
  },
  {
    "names": [
      "Tickit",
      "Tockroach",
      "Horolusk"
    ],
    "types": [
      "BUG",
      "PSYCHIC_TYPE"
    ],
    "shape": "insect",
    "habitat": "Stopped Clocktower",
    "details": [
      "clock hand antennae",
      "pendulum abdomen",
      "transparent dial wings"
    ],
    "lore": "It keeps time for clocks that stopped on difficult days."
  },
  {
    "names": [
      "Hushfin",
      "Siltveil",
      "Mournray"
    ],
    "types": [
      "WATER",
      "GHOST"
    ],
    "shape": "fish",
    "habitat": "Sunken Crossing",
    "details": [
      "pale fin tips",
      "mud veil fins",
      "wide trailing ray wings"
    ],
    "lore": "It traces submerged paths with a light nobody can see from shore."
  },
  {
    "names": [
      "Laceling",
      "Lacemoth",
      "Shroudmoth"
    ],
    "types": [
      "BUG",
      "GHOST"
    ],
    "shape": "moth",
    "habitat": "Wardrobe Rooms",
    "details": [
      "lace collar larva",
      "folded lace cocoon",
      "frayed burial lace wings"
    ],
    "lore": "It nests in unworn clothes and never damages a stitch."
  },
  {
    "names": [
      "Chalkid",
      "Slatesoul",
      "Tabulorn"
    ],
    "types": [
      "ROCK",
      "PSYCHIC_TYPE"
    ],
    "shape": "lizard",
    "habitat": "Empty School",
    "details": [
      "chalk stripe tail",
      "slate back plate",
      "floating chalk runes"
    ],
    "lore": "It writes half remembered lessons on dusty floors."
  },
  {
    "names": [
      "Chirrift",
      "Echowing",
      "Resonark"
    ],
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "shape": "bat",
    "habitat": "Echo Viaduct",
    "details": [
      "split ear tips",
      "bell shaped ears",
      "ribbed echo sail wings"
    ],
    "lore": "It returns the last word spoken beneath an empty bridge."
  },
  {
    "names": [
      "Loomite",
      "Spindrel",
      "Weavern"
    ],
    "types": [
      "BUG",
      "DRAGON"
    ],
    "shape": "insect",
    "habitat": "Mill Rafters",
    "details": [
      "spool abdomen",
      "long spindle legs",
      "woven sail wings"
    ],
    "lore": "It weaves soft nests from cobwebs and windblown grass."
  },
  {
    "names": [
      "Gritpup",
      "Rubblejaw",
      "Quarryn"
    ],
    "types": [
      "ROCK",
      "GROUND"
    ],
    "shape": "dog",
    "habitat": "Abandoned Quarry",
    "details": [
      "gravel paws",
      "broken stone collar",
      "layered quarry slab mane"
    ],
    "lore": "It braces unstable stones so smaller creatures can pass."
  },
  {
    "names": [
      "Frostkit",
      "Rimeveil",
      "Glacivow"
    ],
    "types": [
      "ICE",
      "GHOST"
    ],
    "shape": "fox",
    "habitat": "Frozen Lake",
    "details": [
      "frost ear rims",
      "mist scarf",
      "crystal mourning veil"
    ],
    "lore": "Its breath preserves footprints until their maker returns."
  },
  {
    "names": [
      "Voltlet",
      "Wirelyn",
      "Gridmourne"
    ],
    "types": [
      "ELECTRIC"
    ],
    "shape": "cat",
    "habitat": "Quiet Substation",
    "details": [
      "wire whiskers",
      "coiled cable tail",
      "arched insulator mane"
    ],
    "lore": "It restores a little power to lights left burning for someone."
  },
  {
    "names": [
      "Drowseed",
      "Napsprout",
      "Somnillow"
    ],
    "types": [
      "GRASS",
      "PSYCHIC_TYPE"
    ],
    "shape": "plant",
    "habitat": "Dream Garden",
    "details": [
      "closed seed eyes",
      "drooping leaf arms",
      "willow canopy hood"
    ],
    "lore": "Its shade brings dreams of gardens that no longer grow."
  },
  {
    "names": [
      "Dregsip",
      "Tarnbrew",
      "Cisternox"
    ],
    "types": [
      "POISON",
      "WATER"
    ],
    "shape": "slug",
    "habitat": "Dry Waterworks",
    "details": [
      "stained glass hump",
      "twin pipe feelers",
      "cistern shell and leaking valves"
    ],
    "lore": "It filters bitter water through the sediment on its back."
  },
  {
    "names": [
      "Scuffawn",
      "Trackhart",
      "Waywarden"
    ],
    "types": [
      "GROUND",
      "NORMAL"
    ],
    "shape": "deer",
    "habitat": "Unmarked Trails",
    "details": [
      "mud sock legs",
      "map line flank",
      "compass antler frame"
    ],
    "lore": "It follows forgotten tracks and waits at every fork."
  },
  {
    "names": [
      "Rustnip",
      "Lockjawl",
      "Gatelorn"
    ],
    "types": [
      "ROCK",
      "FIGHTING"
    ],
    "shape": "crab",
    "habitat": "Locked Courtyard",
    "details": [
      "key tooth claws",
      "padlock chest",
      "gate bar forelimbs"
    ],
    "lore": "It opens rusted gates by gripping their hinges patiently."
  },
  {
    "names": [
      "Smudgit",
      "Inkmant",
      "Palimourn"
    ],
    "types": [
      "POISON",
      "PSYCHIC_TYPE"
    ],
    "shape": "squid",
    "habitat": "Flooded Archive",
    "details": [
      "ink drop body",
      "quill tentacles",
      "layered parchment mantle"
    ],
    "lore": "It removes ruined ink while leaving the meaning of a page intact."
  },
  {
    "names": [
      "Yarnip",
      "Tangloom",
      "Skeinerva"
    ],
    "types": [
      "NORMAL",
      "PSYCHIC_TYPE"
    ],
    "shape": "cat",
    "habitat": "Weaver House",
    "details": [
      "yarn ball tail",
      "looped scarf",
      "floating spiral yarn crown"
    ],
    "lore": "It untangles threads when their owners cannot stop worrying."
  },
  {
    "names": [
      "Flintot",
      "Knellhorn",
      "Cragbell"
    ],
    "types": [
      "ROCK",
      "NORMAL"
    ],
    "shape": "goat",
    "habitat": "Bell Ridge",
    "details": [
      "stone chin tuft",
      "hollow bell horns",
      "crag crown and bell beard"
    ],
    "lore": "Its horns ring softly when a storm is about to break."
  },
  {
    "names": [
      "Budreg",
      "Sallowisp",
      "Florrequiem"
    ],
    "types": [
      "GRASS",
      "GHOST"
    ],
    "shape": "plant",
    "habitat": "Wilted Conservatory",
    "details": [
      "closed flower hood",
      "withered petal sleeves",
      "long mourning bouquet body"
    ],
    "lore": "It gathers fallen petals instead of taking living flowers."
  },
  {
    "names": [
      "Gullip",
      "Gullament",
      "Harbourn"
    ],
    "types": [
      "WATER",
      "FLYING"
    ],
    "shape": "bird",
    "habitat": "Empty Harbor",
    "details": [
      "rope anklet",
      "knotted wing tips",
      "anchor shaped tail plume"
    ],
    "lore": "It waits on the pier for boats whose routes have been forgotten."
  },
  {
    "names": [
      "Flicket",
      "Filmurk",
      "Reelraith"
    ],
    "types": [
      "GHOST",
      "PSYCHIC_TYPE"
    ],
    "shape": "snake",
    "habitat": "Closed Cinema",
    "details": [
      "filmstrip tail",
      "reel coil body",
      "projector eye and trailing frames"
    ],
    "lore": "It projects small moments onto walls in otherwise empty rooms."
  },
  {
    "names": [
      "Nibbit",
      "Pagehare",
      "Archivelle"
    ],
    "types": [
      "NORMAL",
      "PSYCHIC_TYPE"
    ],
    "shape": "hare",
    "habitat": "Dust Library",
    "details": [
      "folded page ears",
      "book spine collar",
      "fan of annotated paper tails"
    ],
    "lore": "It remembers stories even after the pages have crumbled."
  },
  {
    "names": [
      "Burroot",
      "Tunnelorn",
      "Barrowmole"
    ],
    "types": [
      "GROUND",
      "GHOST"
    ],
    "shape": "mole",
    "habitat": "Collapsed Tunnels",
    "details": [
      "root whiskers",
      "shovel claws",
      "tunnel arch back"
    ],
    "lore": "It digs air holes into sealed tunnels before settling to sleep."
  },
  {
    "names": [
      "Meltip",
      "Dripflare",
      "Waxabbot"
    ],
    "types": [
      "FIRE",
      "PSYCHIC_TYPE"
    ],
    "shape": "slug",
    "habitat": "Candle Chapel",
    "details": [
      "wax droplet crown",
      "tapered candle hump",
      "seven small votive flames"
    ],
    "lore": "It lights only the candles that somebody once intended to light."
  },
  {
    "names": [
      "Gloamlet",
      "Shadecoil",
      "Umbravern"
    ],
    "types": [
      "DRAGON",
      "GHOST"
    ],
    "shape": "snake",
    "habitat": "Deep Mist",
    "details": [
      "mist collar",
      "elongated shadow fins",
      "open rib sail and pale horns"
    ],
    "lore": "It moves between banks of fog without disturbing a leaf."
  },
  {
    "names": [
      "Puddimp",
      "Runnelk",
      "Rivervow"
    ],
    "types": [
      "WATER"
    ],
    "shape": "otter",
    "habitat": "Disused Canal",
    "details": [
      "puddle belly",
      "canal reed belt",
      "flowing water cloak"
    ],
    "lore": "It clears silt from channels that lead to dry village wells."
  },
  {
    "names": [
      "Fernip",
      "Frondillo",
      "Grovigil"
    ],
    "types": [
      "GRASS",
      "GROUND"
    ],
    "shape": "tortoise",
    "habitat": "Overgrown Orchard",
    "details": [
      "fern shell sprout",
      "layered frond plates",
      "orchard sapling shell"
    ],
    "lore": "Its slow walks scatter seeds along roads nobody tends."
  },
  {
    "names": [
      "Bristlit",
      "Quillurne",
      "Spinewake"
    ],
    "types": [
      "POISON",
      "NORMAL"
    ],
    "shape": "mouse",
    "habitat": "Thistle Fields",
    "details": [
      "soft thistle quills",
      "banded thorn spines",
      "long quill fan"
    ],
    "lore": "It lays shed quills around sleeping companions as a warning fence."
  },
  {
    "names": [
      "Sockit",
      "Mittenmaw",
      "Hearthhug"
    ],
    "types": [
      "NORMAL",
      "FIGHTING"
    ],
    "shape": "bear",
    "habitat": "Winter Houses",
    "details": [
      "sock shaped paws",
      "mitten forearms",
      "thick knitted shoulder wrap"
    ],
    "lore": "It warms cold hands by holding them between its padded paws."
  },
  {
    "names": [
      "Glintick",
      "Prismite",
      "Vitreloom"
    ],
    "types": [
      "BUG",
      "ELECTRIC"
    ],
    "shape": "insect",
    "habitat": "Broken Greenhouse",
    "details": [
      "glass shard wings",
      "prism abdomen",
      "stained glass wing mosaic"
    ],
    "lore": "It scatters surviving sunlight across plants in dark corners."
  },
  {
    "names": [
      "Fellip",
      "Dirgehound",
      "Vigilhowl"
    ],
    "types": [
      "GHOST",
      "NORMAL"
    ],
    "shape": "dog",
    "habitat": "Path of Grief",
    "details": [
      "drooping pale ears",
      "long scarf mane",
      "crescent memorial crest"
    ],
    "lore": "It walks beside the grieving until they choose their next step."
  },
  {
    "names": [
      "Clammourne",
      "Clammorte"
    ],
    "types": [
      "WATER",
      "GHOST"
    ],
    "shape": "clam",
    "habitat": "Mourning Shore",
    "details": [
      "tear pearl and split shell",
      "black pearl in a scalloped veil"
    ],
    "lore": "It shelters lost keepsakes inside its shell."
  },
  {
    "names": [
      "Portick",
      "Portalsect"
    ],
    "types": [
      "BUG",
      "PSYCHIC_TYPE"
    ],
    "shape": "insect",
    "habitat": "Threshold Ruins",
    "details": [
      "doorframe antennae",
      "rectangular gateway wing frame"
    ],
    "lore": "It senses thresholds whose far side no longer matches the near side."
  },
  {
    "names": [
      "Booti",
      "Stridusk"
    ],
    "types": [
      "GROUND",
      "GHOST"
    ],
    "shape": "hare",
    "habitat": "Muddy Doorsteps",
    "details": [
      "oversized boot feet",
      "long gaiters and worn sole tail"
    ],
    "lore": "It leaves pairs of tracks even when it walks alone."
  },
  {
    "names": [
      "Tarnit",
      "Mirravel"
    ],
    "types": [
      "PSYCHIC_TYPE",
      "GHOST"
    ],
    "shape": "cat",
    "habitat": "Covered Mirrors",
    "details": [
      "silver cheek plate",
      "oval mirror mane with missing reflection"
    ],
    "lore": "It looks for faces in mirrors that have been covered for years."
  },
  {
    "names": [
      "Brolip",
      "Parasolm"
    ],
    "types": [
      "WATER",
      "GHOST"
    ],
    "shape": "frog",
    "habitat": "Rainy Steps",
    "details": [
      "folded umbrella crest",
      "wide torn parasol hood"
    ],
    "lore": "It lends its shelter to anyone waiting outside a locked door."
  },
  {
    "names": [
      "Knottot",
      "Ropelorn"
    ],
    "types": [
      "GRASS",
      "FIGHTING"
    ],
    "shape": "snake",
    "habitat": "Rope Bridge",
    "details": [
      "knotted tail",
      "braided body and hand shaped root ends"
    ],
    "lore": "It holds fraying bridges together with its own body."
  },
  {
    "names": [
      "Mosslit",
      "Antlerue"
    ],
    "types": [
      "GRASS",
      "GHOST"
    ],
    "shape": "deer",
    "habitat": "Memory Grove",
    "details": [
      "moss cap horns",
      "hanging moss antler curtains"
    ],
    "lore": "It carries traces of old forests into new clearings."
  },
  {
    "names": [
      "Scabbet",
      "Scarleech"
    ],
    "types": [
      "BUG",
      "POISON"
    ],
    "shape": "slug",
    "habitat": "Still Marsh",
    "details": [
      "bandage stripe",
      "scarlet segmented suction cloak"
    ],
    "lore": "It feeds on spoiled sap and binds the cracks it leaves behind."
  },
  {
    "names": [
      "Cindrill",
      "Coalchant"
    ],
    "types": [
      "FIRE",
      "ROCK"
    ],
    "shape": "mole",
    "habitat": "Cold Furnace",
    "details": [
      "coal nose",
      "furnace grate chest and ember claws"
    ],
    "lore": "It hums into cold furnaces until one ember answers."
  },
  {
    "names": [
      "Crumbat",
      "Loaflorn"
    ],
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "shape": "bat",
    "habitat": "Empty Bakery",
    "details": [
      "flour dust wings",
      "bread crust wing ridges"
    ],
    "lore": "It saves crumbs in rafters through the leanest seasons."
  },
  {
    "names": [
      "Mistcalf",
      "Fogauro"
    ],
    "types": [
      "ICE",
      "NORMAL"
    ],
    "shape": "goat",
    "habitat": "Cloud Pasture",
    "details": [
      "fog tuft forehead",
      "great curling frost horns"
    ],
    "lore": "It gathers wandering herds by following their breath in the mist."
  },
  {
    "names": [
      "Pellip",
      "Bellowsoul"
    ],
    "types": [
      "FIRE",
      "FLYING"
    ],
    "shape": "bird",
    "habitat": "Abandoned Forge",
    "details": [
      "bellows throat pouch",
      "long leather fan wings"
    ],
    "lore": "It breathes air onto dying coals when the wind has stopped."
  },
  {
    "names": [
      "Veilook"
    ],
    "types": [
      "GHOST"
    ],
    "shape": "bird",
    "habitat": "North Forest",
    "details": [
      "long translucent veil and sideways watching eye"
    ],
    "lore": "It watches the space beside you. Nobody remembers its arrival."
  },
  {
    "names": [
      "Lornkey"
    ],
    "types": [
      "GHOST",
      "PSYCHIC_TYPE"
    ],
    "shape": "insect",
    "habitat": "Abandoned Lab",
    "details": [
      "key shaped antennae and floating hollow lock body"
    ],
    "lore": "It turns toward doors that someone has left unfinished."
  },
  {
    "names": [
      "Desidra"
    ],
    "types": [
      "DRAGON",
      "PSYCHIC_TYPE"
    ],
    "shape": "deer",
    "habitat": "Desiderium",
    "details": [
      "branching glass horns and hollow luminous chest"
    ],
    "lore": "It approaches places where longing has outlasted every living witness."
  },
  {
    "names": [
      "Anemora"
    ],
    "types": [
      "GRASS",
      "GHOST"
    ],
    "shape": "plant",
    "habitat": "Anemoia Ruins",
    "details": [
      "windblown flower skirt and empty seed lantern"
    ],
    "lore": "It blooms when someone remembers a home differently than it was."
  },
  {
    "names": [
      "Stillune"
    ],
    "types": [
      "ICE",
      "PSYCHIC_TYPE"
    ],
    "shape": "clam",
    "habitat": "Moon Reservoir",
    "details": [
      "crescent shell enclosing a suspended water bead"
    ],
    "lore": "Its water remains perfectly still even beneath falling rain."
  },
  {
    "names": [
      "Vesperant"
    ],
    "types": [
      "BUG",
      "GHOST"
    ],
    "shape": "insect",
    "habitat": "Twilight Boundary",
    "details": [
      "six candle legs and narrow ceremonial wing cloak"
    ],
    "lore": "It gathers at dusk where a path has yet to be chosen."
  }
];
const entries=[
  {
    "number": 1,
    "id": "GLIM",
    "name": "Glim",
    "family": 0,
    "stage": 0,
    "design": "small lantern belly",
    "habitat": "East Path",
    "entry": "It keeps a glow for travelers who have lost their way. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 2,
    "id": "LUMOURN",
    "name": "Lumourn",
    "family": 0,
    "stage": 1,
    "design": "drooping ribbon ears",
    "habitat": "East Path",
    "entry": "It keeps a glow for travelers who have lost their way. It now tends a small territory of its own."
  },
  {
    "number": 3,
    "id": "LUMINELL",
    "name": "Luminell",
    "family": 0,
    "stage": 2,
    "design": "halo of loose light threads",
    "habitat": "East Path",
    "entry": "It keeps a glow for travelers who have lost their way. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 4,
    "id": "HUSHLET",
    "name": "Hushlet",
    "family": 1,
    "stage": 0,
    "design": "round downy mask",
    "habitat": "Silent Observatory",
    "entry": "It watches the outlines of places erased from memory. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 5,
    "id": "DUSKOWL",
    "name": "Duskowl",
    "family": 1,
    "stage": 1,
    "design": "folded eyelid wings",
    "habitat": "Silent Observatory",
    "entry": "It watches the outlines of places erased from memory. It now tends a small territory of its own."
  },
  {
    "number": 6,
    "id": "NOCTEYE",
    "name": "Nocteye",
    "family": 1,
    "stage": 2,
    "design": "wide pale gaze and crescent brow",
    "habitat": "Silent Observatory",
    "entry": "It watches the outlines of places erased from memory. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 7,
    "id": "VELIMP",
    "name": "Velimp",
    "family": 2,
    "stage": 0,
    "design": "ragged veil hood",
    "habitat": "Curtained Houses",
    "entry": "It draws curtains across rooms whose occupants never returned. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 8,
    "id": "VELSHADE",
    "name": "Velshade",
    "family": 2,
    "stage": 1,
    "design": "trailing curtain tail",
    "habitat": "Curtained Houses",
    "entry": "It draws curtains across rooms whose occupants never returned. It now tends a small territory of its own."
  },
  {
    "number": 9,
    "id": "VELUMBRA",
    "name": "Velumbra",
    "family": 2,
    "stage": 2,
    "design": "four floating veil panels",
    "habitat": "Curtained Houses",
    "entry": "It draws curtains across rooms whose occupants never returned. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 10,
    "id": "MISULET",
    "name": "Misulet",
    "family": 3,
    "stage": 0,
    "design": "mildew whiskers",
    "habitat": "Damp Pantry",
    "entry": "It eats spoiled provisions and leaves clean crumbs behind. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 11,
    "id": "MISUMURK",
    "name": "Misumurk",
    "family": 3,
    "stage": 1,
    "design": "spore puff cheeks",
    "habitat": "Damp Pantry",
    "entry": "It eats spoiled provisions and leaves clean crumbs behind. It now tends a small territory of its own."
  },
  {
    "number": 12,
    "id": "GLOOMISU",
    "name": "Gloomisu",
    "family": 3,
    "stage": 2,
    "design": "mantle of violet shelf fungi",
    "habitat": "Damp Pantry",
    "entry": "It eats spoiled provisions and leaves clean crumbs behind. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 13,
    "id": "WICKIT",
    "name": "Wickit",
    "family": 4,
    "stage": 0,
    "design": "single wick tail",
    "habitat": "Cold Hearth",
    "entry": "It tends hearths after the last family has moved away. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 14,
    "id": "CINDERVOW",
    "name": "Cindervow",
    "family": 4,
    "stage": 1,
    "design": "wax drip mane",
    "habitat": "Cold Hearth",
    "entry": "It tends hearths after the last family has moved away. It now tends a small territory of its own."
  },
  {
    "number": 15,
    "id": "PYRELORN",
    "name": "Pyrelorn",
    "family": 4,
    "stage": 2,
    "design": "three blue funeral flames",
    "habitat": "Cold Hearth",
    "entry": "It tends hearths after the last family has moved away. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 16,
    "id": "REEDLEAP",
    "name": "Reedleap",
    "family": 5,
    "stage": 0,
    "design": "reed head sprout",
    "habitat": "Reed Pools",
    "entry": "It sings through its reeds only when rain hides the sound. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 17,
    "id": "MARSHHUSH",
    "name": "Marshhush",
    "family": 5,
    "stage": 1,
    "design": "hollow reed throat",
    "habitat": "Reed Pools",
    "entry": "It sings through its reeds only when rain hides the sound. It now tends a small territory of its own."
  },
  {
    "number": 18,
    "id": "FENMORROW",
    "name": "Fenmorrow",
    "family": 5,
    "stage": 2,
    "design": "arched reed canopy",
    "habitat": "Reed Pools",
    "entry": "It sings through its reeds only when rain hides the sound. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 19,
    "id": "THIMLET",
    "name": "Thimlet",
    "family": 6,
    "stage": 0,
    "design": "button chest",
    "habitat": "Sewing Loft",
    "entry": "It repairs abandoned blankets using threads of remembered warmth. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 20,
    "id": "SEAMOURN",
    "name": "Seamourn",
    "family": 6,
    "stage": 1,
    "design": "loose seam scarf",
    "habitat": "Sewing Loft",
    "entry": "It repairs abandoned blankets using threads of remembered warmth. It now tends a small territory of its own."
  },
  {
    "number": 21,
    "id": "QUILTRESS",
    "name": "Quiltress",
    "family": 6,
    "stage": 2,
    "design": "patchwork shroud cape",
    "habitat": "Sewing Loft",
    "entry": "It repairs abandoned blankets using threads of remembered warmth. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 22,
    "id": "SOOTPIP",
    "name": "Sootpip",
    "family": 7,
    "stage": 0,
    "design": "soot cheek freckles",
    "habitat": "Disused Chimneys",
    "entry": "Its low song clears smoke from houses that have no fires. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 23,
    "id": "FLUEWING",
    "name": "Fluewing",
    "family": 7,
    "stage": 1,
    "design": "smoke stream wings",
    "habitat": "Disused Chimneys",
    "entry": "Its low song clears smoke from houses that have no fires. It now tends a small territory of its own."
  },
  {
    "number": 24,
    "id": "ASHCANT",
    "name": "Ashcant",
    "family": 7,
    "stage": 2,
    "design": "chimney crown and ember throat",
    "habitat": "Disused Chimneys",
    "entry": "Its low song clears smoke from houses that have no fires. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 25,
    "id": "PEBBLIT",
    "name": "Pebblit",
    "family": 8,
    "stage": 0,
    "design": "pebble shell",
    "habitat": "Old Burial Road",
    "entry": "It remembers each stone placed upon its back. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 26,
    "id": "CAIRNOOK",
    "name": "Cairnook",
    "family": 8,
    "stage": 1,
    "design": "stacked cairn plates",
    "habitat": "Old Burial Road",
    "entry": "It remembers each stone placed upon its back. It now tends a small territory of its own."
  },
  {
    "number": 27,
    "id": "MONULITH",
    "name": "Monulith",
    "family": 8,
    "stage": 2,
    "design": "carved memorial shell",
    "habitat": "Old Burial Road",
    "entry": "It remembers each stone placed upon its back. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 28,
    "id": "DRIZZLET",
    "name": "Drizzlet",
    "family": 9,
    "stage": 0,
    "design": "droplet crest",
    "habitat": "Rain Fields",
    "entry": "It shelters small creatures beneath its wings without asking company. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 29,
    "id": "PLUVANE",
    "name": "Pluvane",
    "family": 9,
    "stage": 1,
    "design": "umbrella wings",
    "habitat": "Rain Fields",
    "entry": "It shelters small creatures beneath its wings without asking company. It now tends a small territory of its own."
  },
  {
    "number": 30,
    "id": "NIMBREL",
    "name": "Nimbrel",
    "family": 9,
    "stage": 2,
    "design": "hanging rain bead feathers",
    "habitat": "Rain Fields",
    "entry": "It shelters small creatures beneath its wings without asking company. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 31,
    "id": "TINESPRIG",
    "name": "Tinesprig",
    "family": 10,
    "stage": 0,
    "design": "twig horns",
    "habitat": "Briar Verge",
    "entry": "Its antlers mark the routes that the forest has swallowed. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 32,
    "id": "BRAMBUCK",
    "name": "Brambuck",
    "family": 10,
    "stage": 1,
    "design": "thorn branch rack",
    "habitat": "Briar Verge",
    "entry": "Its antlers mark the routes that the forest has swallowed. It now tends a small territory of its own."
  },
  {
    "number": 33,
    "id": "THORNHART",
    "name": "Thornhart",
    "family": 10,
    "stage": 2,
    "design": "bloomless antler arch",
    "habitat": "Briar Verge",
    "entry": "Its antlers mark the routes that the forest has swallowed. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 34,
    "id": "TICKIT",
    "name": "Tickit",
    "family": 11,
    "stage": 0,
    "design": "clock hand antennae",
    "habitat": "Stopped Clocktower",
    "entry": "It keeps time for clocks that stopped on difficult days. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 35,
    "id": "TOCKROACH",
    "name": "Tockroach",
    "family": 11,
    "stage": 1,
    "design": "pendulum abdomen",
    "habitat": "Stopped Clocktower",
    "entry": "It keeps time for clocks that stopped on difficult days. It now tends a small territory of its own."
  },
  {
    "number": 36,
    "id": "HOROLUSK",
    "name": "Horolusk",
    "family": 11,
    "stage": 2,
    "design": "transparent dial wings",
    "habitat": "Stopped Clocktower",
    "entry": "It keeps time for clocks that stopped on difficult days. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 37,
    "id": "HUSHFIN",
    "name": "Hushfin",
    "family": 12,
    "stage": 0,
    "design": "pale fin tips",
    "habitat": "Sunken Crossing",
    "entry": "It traces submerged paths with a light nobody can see from shore. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 38,
    "id": "SILTVEIL",
    "name": "Siltveil",
    "family": 12,
    "stage": 1,
    "design": "mud veil fins",
    "habitat": "Sunken Crossing",
    "entry": "It traces submerged paths with a light nobody can see from shore. It now tends a small territory of its own."
  },
  {
    "number": 39,
    "id": "MOURNRAY",
    "name": "Mournray",
    "family": 12,
    "stage": 2,
    "design": "wide trailing ray wings",
    "habitat": "Sunken Crossing",
    "entry": "It traces submerged paths with a light nobody can see from shore. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 40,
    "id": "LACELING",
    "name": "Laceling",
    "family": 13,
    "stage": 0,
    "design": "lace collar larva",
    "habitat": "Wardrobe Rooms",
    "entry": "It nests in unworn clothes and never damages a stitch. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 41,
    "id": "LACEMOTH",
    "name": "Lacemoth",
    "family": 13,
    "stage": 1,
    "design": "folded lace cocoon",
    "habitat": "Wardrobe Rooms",
    "entry": "It nests in unworn clothes and never damages a stitch. It now tends a small territory of its own."
  },
  {
    "number": 42,
    "id": "SHROUDMOTH",
    "name": "Shroudmoth",
    "family": 13,
    "stage": 2,
    "design": "frayed burial lace wings",
    "habitat": "Wardrobe Rooms",
    "entry": "It nests in unworn clothes and never damages a stitch. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 43,
    "id": "CHALKID",
    "name": "Chalkid",
    "family": 14,
    "stage": 0,
    "design": "chalk stripe tail",
    "habitat": "Empty School",
    "entry": "It writes half remembered lessons on dusty floors. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 44,
    "id": "SLATESOUL",
    "name": "Slatesoul",
    "family": 14,
    "stage": 1,
    "design": "slate back plate",
    "habitat": "Empty School",
    "entry": "It writes half remembered lessons on dusty floors. It now tends a small territory of its own."
  },
  {
    "number": 45,
    "id": "TABULORN",
    "name": "Tabulorn",
    "family": 14,
    "stage": 2,
    "design": "floating chalk runes",
    "habitat": "Empty School",
    "entry": "It writes half remembered lessons on dusty floors. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 46,
    "id": "CHIRRIFT",
    "name": "Chirrift",
    "family": 15,
    "stage": 0,
    "design": "split ear tips",
    "habitat": "Echo Viaduct",
    "entry": "It returns the last word spoken beneath an empty bridge. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 47,
    "id": "ECHOWING",
    "name": "Echowing",
    "family": 15,
    "stage": 1,
    "design": "bell shaped ears",
    "habitat": "Echo Viaduct",
    "entry": "It returns the last word spoken beneath an empty bridge. It now tends a small territory of its own."
  },
  {
    "number": 48,
    "id": "RESONARK",
    "name": "Resonark",
    "family": 15,
    "stage": 2,
    "design": "ribbed echo sail wings",
    "habitat": "Echo Viaduct",
    "entry": "It returns the last word spoken beneath an empty bridge. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 49,
    "id": "LOOMITE",
    "name": "Loomite",
    "family": 16,
    "stage": 0,
    "design": "spool abdomen",
    "habitat": "Mill Rafters",
    "entry": "It weaves soft nests from cobwebs and windblown grass. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 50,
    "id": "SPINDREL",
    "name": "Spindrel",
    "family": 16,
    "stage": 1,
    "design": "long spindle legs",
    "habitat": "Mill Rafters",
    "entry": "It weaves soft nests from cobwebs and windblown grass. It now tends a small territory of its own."
  },
  {
    "number": 51,
    "id": "WEAVERN",
    "name": "Weavern",
    "family": 16,
    "stage": 2,
    "design": "woven sail wings",
    "habitat": "Mill Rafters",
    "entry": "It weaves soft nests from cobwebs and windblown grass. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 52,
    "id": "GRITPUP",
    "name": "Gritpup",
    "family": 17,
    "stage": 0,
    "design": "gravel paws",
    "habitat": "Abandoned Quarry",
    "entry": "It braces unstable stones so smaller creatures can pass. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 53,
    "id": "RUBBLEJAW",
    "name": "Rubblejaw",
    "family": 17,
    "stage": 1,
    "design": "broken stone collar",
    "habitat": "Abandoned Quarry",
    "entry": "It braces unstable stones so smaller creatures can pass. It now tends a small territory of its own."
  },
  {
    "number": 54,
    "id": "QUARRYN",
    "name": "Quarryn",
    "family": 17,
    "stage": 2,
    "design": "layered quarry slab mane",
    "habitat": "Abandoned Quarry",
    "entry": "It braces unstable stones so smaller creatures can pass. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 55,
    "id": "FROSTKIT",
    "name": "Frostkit",
    "family": 18,
    "stage": 0,
    "design": "frost ear rims",
    "habitat": "Frozen Lake",
    "entry": "Its breath preserves footprints until their maker returns. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 56,
    "id": "RIMEVEIL",
    "name": "Rimeveil",
    "family": 18,
    "stage": 1,
    "design": "mist scarf",
    "habitat": "Frozen Lake",
    "entry": "Its breath preserves footprints until their maker returns. It now tends a small territory of its own."
  },
  {
    "number": 57,
    "id": "GLACIVOW",
    "name": "Glacivow",
    "family": 18,
    "stage": 2,
    "design": "crystal mourning veil",
    "habitat": "Frozen Lake",
    "entry": "Its breath preserves footprints until their maker returns. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 58,
    "id": "VOLTLET",
    "name": "Voltlet",
    "family": 19,
    "stage": 0,
    "design": "wire whiskers",
    "habitat": "Quiet Substation",
    "entry": "It restores a little power to lights left burning for someone. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 59,
    "id": "WIRELYN",
    "name": "Wirelyn",
    "family": 19,
    "stage": 1,
    "design": "coiled cable tail",
    "habitat": "Quiet Substation",
    "entry": "It restores a little power to lights left burning for someone. It now tends a small territory of its own."
  },
  {
    "number": 60,
    "id": "GRIDMOURNE",
    "name": "Gridmourne",
    "family": 19,
    "stage": 2,
    "design": "arched insulator mane",
    "habitat": "Quiet Substation",
    "entry": "It restores a little power to lights left burning for someone. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 61,
    "id": "DROWSEED",
    "name": "Drowseed",
    "family": 20,
    "stage": 0,
    "design": "closed seed eyes",
    "habitat": "Dream Garden",
    "entry": "Its shade brings dreams of gardens that no longer grow. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 62,
    "id": "NAPSPROUT",
    "name": "Napsprout",
    "family": 20,
    "stage": 1,
    "design": "drooping leaf arms",
    "habitat": "Dream Garden",
    "entry": "Its shade brings dreams of gardens that no longer grow. It now tends a small territory of its own."
  },
  {
    "number": 63,
    "id": "SOMNILLOW",
    "name": "Somnillow",
    "family": 20,
    "stage": 2,
    "design": "willow canopy hood",
    "habitat": "Dream Garden",
    "entry": "Its shade brings dreams of gardens that no longer grow. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 64,
    "id": "DREGSIP",
    "name": "Dregsip",
    "family": 21,
    "stage": 0,
    "design": "stained glass hump",
    "habitat": "Dry Waterworks",
    "entry": "It filters bitter water through the sediment on its back. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 65,
    "id": "TARNBREW",
    "name": "Tarnbrew",
    "family": 21,
    "stage": 1,
    "design": "twin pipe feelers",
    "habitat": "Dry Waterworks",
    "entry": "It filters bitter water through the sediment on its back. It now tends a small territory of its own."
  },
  {
    "number": 66,
    "id": "CISTERNOX",
    "name": "Cisternox",
    "family": 21,
    "stage": 2,
    "design": "cistern shell and leaking valves",
    "habitat": "Dry Waterworks",
    "entry": "It filters bitter water through the sediment on its back. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 67,
    "id": "SCUFFAWN",
    "name": "Scuffawn",
    "family": 22,
    "stage": 0,
    "design": "mud sock legs",
    "habitat": "Unmarked Trails",
    "entry": "It follows forgotten tracks and waits at every fork. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 68,
    "id": "TRACKHART",
    "name": "Trackhart",
    "family": 22,
    "stage": 1,
    "design": "map line flank",
    "habitat": "Unmarked Trails",
    "entry": "It follows forgotten tracks and waits at every fork. It now tends a small territory of its own."
  },
  {
    "number": 69,
    "id": "WAYWARDEN",
    "name": "Waywarden",
    "family": 22,
    "stage": 2,
    "design": "compass antler frame",
    "habitat": "Unmarked Trails",
    "entry": "It follows forgotten tracks and waits at every fork. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 70,
    "id": "RUSTNIP",
    "name": "Rustnip",
    "family": 23,
    "stage": 0,
    "design": "key tooth claws",
    "habitat": "Locked Courtyard",
    "entry": "It opens rusted gates by gripping their hinges patiently. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 71,
    "id": "LOCKJAWL",
    "name": "Lockjawl",
    "family": 23,
    "stage": 1,
    "design": "padlock chest",
    "habitat": "Locked Courtyard",
    "entry": "It opens rusted gates by gripping their hinges patiently. It now tends a small territory of its own."
  },
  {
    "number": 72,
    "id": "GATELORN",
    "name": "Gatelorn",
    "family": 23,
    "stage": 2,
    "design": "gate bar forelimbs",
    "habitat": "Locked Courtyard",
    "entry": "It opens rusted gates by gripping their hinges patiently. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 73,
    "id": "SMUDGIT",
    "name": "Smudgit",
    "family": 24,
    "stage": 0,
    "design": "ink drop body",
    "habitat": "Flooded Archive",
    "entry": "It removes ruined ink while leaving the meaning of a page intact. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 74,
    "id": "INKMANT",
    "name": "Inkmant",
    "family": 24,
    "stage": 1,
    "design": "quill tentacles",
    "habitat": "Flooded Archive",
    "entry": "It removes ruined ink while leaving the meaning of a page intact. It now tends a small territory of its own."
  },
  {
    "number": 75,
    "id": "PALIMOURN",
    "name": "Palimourn",
    "family": 24,
    "stage": 2,
    "design": "layered parchment mantle",
    "habitat": "Flooded Archive",
    "entry": "It removes ruined ink while leaving the meaning of a page intact. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 76,
    "id": "YARNIP",
    "name": "Yarnip",
    "family": 25,
    "stage": 0,
    "design": "yarn ball tail",
    "habitat": "Weaver House",
    "entry": "It untangles threads when their owners cannot stop worrying. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 77,
    "id": "TANGLOOM",
    "name": "Tangloom",
    "family": 25,
    "stage": 1,
    "design": "looped scarf",
    "habitat": "Weaver House",
    "entry": "It untangles threads when their owners cannot stop worrying. It now tends a small territory of its own."
  },
  {
    "number": 78,
    "id": "SKEINERVA",
    "name": "Skeinerva",
    "family": 25,
    "stage": 2,
    "design": "floating spiral yarn crown",
    "habitat": "Weaver House",
    "entry": "It untangles threads when their owners cannot stop worrying. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 79,
    "id": "FLINTOT",
    "name": "Flintot",
    "family": 26,
    "stage": 0,
    "design": "stone chin tuft",
    "habitat": "Bell Ridge",
    "entry": "Its horns ring softly when a storm is about to break. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 80,
    "id": "KNELLHORN",
    "name": "Knellhorn",
    "family": 26,
    "stage": 1,
    "design": "hollow bell horns",
    "habitat": "Bell Ridge",
    "entry": "Its horns ring softly when a storm is about to break. It now tends a small territory of its own."
  },
  {
    "number": 81,
    "id": "CRAGBELL",
    "name": "Cragbell",
    "family": 26,
    "stage": 2,
    "design": "crag crown and bell beard",
    "habitat": "Bell Ridge",
    "entry": "Its horns ring softly when a storm is about to break. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 82,
    "id": "BUDREG",
    "name": "Budreg",
    "family": 27,
    "stage": 0,
    "design": "closed flower hood",
    "habitat": "Wilted Conservatory",
    "entry": "It gathers fallen petals instead of taking living flowers. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 83,
    "id": "SALLOWISP",
    "name": "Sallowisp",
    "family": 27,
    "stage": 1,
    "design": "withered petal sleeves",
    "habitat": "Wilted Conservatory",
    "entry": "It gathers fallen petals instead of taking living flowers. It now tends a small territory of its own."
  },
  {
    "number": 84,
    "id": "FLORREQUIEM",
    "name": "Florrequiem",
    "family": 27,
    "stage": 2,
    "design": "long mourning bouquet body",
    "habitat": "Wilted Conservatory",
    "entry": "It gathers fallen petals instead of taking living flowers. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 85,
    "id": "GULLIP",
    "name": "Gullip",
    "family": 28,
    "stage": 0,
    "design": "rope anklet",
    "habitat": "Empty Harbor",
    "entry": "It waits on the pier for boats whose routes have been forgotten. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 86,
    "id": "GULLAMENT",
    "name": "Gullament",
    "family": 28,
    "stage": 1,
    "design": "knotted wing tips",
    "habitat": "Empty Harbor",
    "entry": "It waits on the pier for boats whose routes have been forgotten. It now tends a small territory of its own."
  },
  {
    "number": 87,
    "id": "HARBOURN",
    "name": "Harbourn",
    "family": 28,
    "stage": 2,
    "design": "anchor shaped tail plume",
    "habitat": "Empty Harbor",
    "entry": "It waits on the pier for boats whose routes have been forgotten. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 88,
    "id": "FLICKET",
    "name": "Flicket",
    "family": 29,
    "stage": 0,
    "design": "filmstrip tail",
    "habitat": "Closed Cinema",
    "entry": "It projects small moments onto walls in otherwise empty rooms. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 89,
    "id": "FILMURK",
    "name": "Filmurk",
    "family": 29,
    "stage": 1,
    "design": "reel coil body",
    "habitat": "Closed Cinema",
    "entry": "It projects small moments onto walls in otherwise empty rooms. It now tends a small territory of its own."
  },
  {
    "number": 90,
    "id": "REELRAITH",
    "name": "Reelraith",
    "family": 29,
    "stage": 2,
    "design": "projector eye and trailing frames",
    "habitat": "Closed Cinema",
    "entry": "It projects small moments onto walls in otherwise empty rooms. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 91,
    "id": "NIBBIT",
    "name": "Nibbit",
    "family": 30,
    "stage": 0,
    "design": "folded page ears",
    "habitat": "Dust Library",
    "entry": "It remembers stories even after the pages have crumbled. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 92,
    "id": "PAGEHARE",
    "name": "Pagehare",
    "family": 30,
    "stage": 1,
    "design": "book spine collar",
    "habitat": "Dust Library",
    "entry": "It remembers stories even after the pages have crumbled. It now tends a small territory of its own."
  },
  {
    "number": 93,
    "id": "ARCHIVELLE",
    "name": "Archivelle",
    "family": 30,
    "stage": 2,
    "design": "fan of annotated paper tails",
    "habitat": "Dust Library",
    "entry": "It remembers stories even after the pages have crumbled. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 94,
    "id": "BURROOT",
    "name": "Burroot",
    "family": 31,
    "stage": 0,
    "design": "root whiskers",
    "habitat": "Collapsed Tunnels",
    "entry": "It digs air holes into sealed tunnels before settling to sleep. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 95,
    "id": "TUNNELORN",
    "name": "Tunnelorn",
    "family": 31,
    "stage": 1,
    "design": "shovel claws",
    "habitat": "Collapsed Tunnels",
    "entry": "It digs air holes into sealed tunnels before settling to sleep. It now tends a small territory of its own."
  },
  {
    "number": 96,
    "id": "BARROWMOLE",
    "name": "Barrowmole",
    "family": 31,
    "stage": 2,
    "design": "tunnel arch back",
    "habitat": "Collapsed Tunnels",
    "entry": "It digs air holes into sealed tunnels before settling to sleep. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 97,
    "id": "MELTIP",
    "name": "Meltip",
    "family": 32,
    "stage": 0,
    "design": "wax droplet crown",
    "habitat": "Candle Chapel",
    "entry": "It lights only the candles that somebody once intended to light. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 98,
    "id": "DRIPFLARE",
    "name": "Dripflare",
    "family": 32,
    "stage": 1,
    "design": "tapered candle hump",
    "habitat": "Candle Chapel",
    "entry": "It lights only the candles that somebody once intended to light. It now tends a small territory of its own."
  },
  {
    "number": 99,
    "id": "WAXABBOT",
    "name": "Waxabbot",
    "family": 32,
    "stage": 2,
    "design": "seven small votive flames",
    "habitat": "Candle Chapel",
    "entry": "It lights only the candles that somebody once intended to light. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 100,
    "id": "GLOAMLET",
    "name": "Gloamlet",
    "family": 33,
    "stage": 0,
    "design": "mist collar",
    "habitat": "Deep Mist",
    "entry": "It moves between banks of fog without disturbing a leaf. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 101,
    "id": "SHADECOIL",
    "name": "Shadecoil",
    "family": 33,
    "stage": 1,
    "design": "elongated shadow fins",
    "habitat": "Deep Mist",
    "entry": "It moves between banks of fog without disturbing a leaf. It now tends a small territory of its own."
  },
  {
    "number": 102,
    "id": "UMBRAVERN",
    "name": "Umbravern",
    "family": 33,
    "stage": 2,
    "design": "open rib sail and pale horns",
    "habitat": "Deep Mist",
    "entry": "It moves between banks of fog without disturbing a leaf. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 103,
    "id": "PUDDIMP",
    "name": "Puddimp",
    "family": 34,
    "stage": 0,
    "design": "puddle belly",
    "habitat": "Disused Canal",
    "entry": "It clears silt from channels that lead to dry village wells. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 104,
    "id": "RUNNELK",
    "name": "Runnelk",
    "family": 34,
    "stage": 1,
    "design": "canal reed belt",
    "habitat": "Disused Canal",
    "entry": "It clears silt from channels that lead to dry village wells. It now tends a small territory of its own."
  },
  {
    "number": 105,
    "id": "RIVERVOW",
    "name": "Rivervow",
    "family": 34,
    "stage": 2,
    "design": "flowing water cloak",
    "habitat": "Disused Canal",
    "entry": "It clears silt from channels that lead to dry village wells. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 106,
    "id": "FERNIP",
    "name": "Fernip",
    "family": 35,
    "stage": 0,
    "design": "fern shell sprout",
    "habitat": "Overgrown Orchard",
    "entry": "Its slow walks scatter seeds along roads nobody tends. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 107,
    "id": "FRONDILLO",
    "name": "Frondillo",
    "family": 35,
    "stage": 1,
    "design": "layered frond plates",
    "habitat": "Overgrown Orchard",
    "entry": "Its slow walks scatter seeds along roads nobody tends. It now tends a small territory of its own."
  },
  {
    "number": 108,
    "id": "GROVIGIL",
    "name": "Grovigil",
    "family": 35,
    "stage": 2,
    "design": "orchard sapling shell",
    "habitat": "Overgrown Orchard",
    "entry": "Its slow walks scatter seeds along roads nobody tends. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 109,
    "id": "BRISTLIT",
    "name": "Bristlit",
    "family": 36,
    "stage": 0,
    "design": "soft thistle quills",
    "habitat": "Thistle Fields",
    "entry": "It lays shed quills around sleeping companions as a warning fence. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 110,
    "id": "QUILLURNE",
    "name": "Quillurne",
    "family": 36,
    "stage": 1,
    "design": "banded thorn spines",
    "habitat": "Thistle Fields",
    "entry": "It lays shed quills around sleeping companions as a warning fence. It now tends a small territory of its own."
  },
  {
    "number": 111,
    "id": "SPINEWAKE",
    "name": "Spinewake",
    "family": 36,
    "stage": 2,
    "design": "long quill fan",
    "habitat": "Thistle Fields",
    "entry": "It lays shed quills around sleeping companions as a warning fence. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 112,
    "id": "SOCKIT",
    "name": "Sockit",
    "family": 37,
    "stage": 0,
    "design": "sock shaped paws",
    "habitat": "Winter Houses",
    "entry": "It warms cold hands by holding them between its padded paws. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 113,
    "id": "MITTENMAW",
    "name": "Mittenmaw",
    "family": 37,
    "stage": 1,
    "design": "mitten forearms",
    "habitat": "Winter Houses",
    "entry": "It warms cold hands by holding them between its padded paws. It now tends a small territory of its own."
  },
  {
    "number": 114,
    "id": "HEARTHHUG",
    "name": "Hearthhug",
    "family": 37,
    "stage": 2,
    "design": "thick knitted shoulder wrap",
    "habitat": "Winter Houses",
    "entry": "It warms cold hands by holding them between its padded paws. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 115,
    "id": "GLINTICK",
    "name": "Glintick",
    "family": 38,
    "stage": 0,
    "design": "glass shard wings",
    "habitat": "Broken Greenhouse",
    "entry": "It scatters surviving sunlight across plants in dark corners. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 116,
    "id": "PRISMITE",
    "name": "Prismite",
    "family": 38,
    "stage": 1,
    "design": "prism abdomen",
    "habitat": "Broken Greenhouse",
    "entry": "It scatters surviving sunlight across plants in dark corners. It now tends a small territory of its own."
  },
  {
    "number": 117,
    "id": "VITRELOOM",
    "name": "Vitreloom",
    "family": 38,
    "stage": 2,
    "design": "stained glass wing mosaic",
    "habitat": "Broken Greenhouse",
    "entry": "It scatters surviving sunlight across plants in dark corners. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 118,
    "id": "FELLIP",
    "name": "Fellip",
    "family": 39,
    "stage": 0,
    "design": "drooping pale ears",
    "habitat": "Path of Grief",
    "entry": "It walks beside the grieving until they choose their next step. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 119,
    "id": "DIRGEHOUND",
    "name": "Dirgehound",
    "family": 39,
    "stage": 1,
    "design": "long scarf mane",
    "habitat": "Path of Grief",
    "entry": "It walks beside the grieving until they choose their next step. It now tends a small territory of its own."
  },
  {
    "number": 120,
    "id": "VIGILHOWL",
    "name": "Vigilhowl",
    "family": 39,
    "stage": 2,
    "design": "crescent memorial crest",
    "habitat": "Path of Grief",
    "entry": "It walks beside the grieving until they choose their next step. It protects the quiet places where its younger kin shelter."
  },
  {
    "number": 121,
    "id": "CLAMMOURNE",
    "name": "Clammourne",
    "family": 40,
    "stage": 0,
    "design": "tear pearl and split shell",
    "habitat": "Mourning Shore",
    "entry": "It shelters lost keepsakes inside its shell. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 122,
    "id": "CLAMMORTE",
    "name": "Clammorte",
    "family": 40,
    "stage": 1,
    "design": "black pearl in a scalloped veil",
    "habitat": "Mourning Shore",
    "entry": "It shelters lost keepsakes inside its shell. It now tends a small territory of its own."
  },
  {
    "number": 123,
    "id": "PORTICK",
    "name": "Portick",
    "family": 41,
    "stage": 0,
    "design": "doorframe antennae",
    "habitat": "Threshold Ruins",
    "entry": "It senses thresholds whose far side no longer matches the near side. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 124,
    "id": "PORTALSECT",
    "name": "Portalsect",
    "family": 41,
    "stage": 1,
    "design": "rectangular gateway wing frame",
    "habitat": "Threshold Ruins",
    "entry": "It senses thresholds whose far side no longer matches the near side. It now tends a small territory of its own."
  },
  {
    "number": 125,
    "id": "BOOTI",
    "name": "Booti",
    "family": 42,
    "stage": 0,
    "design": "oversized boot feet",
    "habitat": "Muddy Doorsteps",
    "entry": "It leaves pairs of tracks even when it walks alone. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 126,
    "id": "STRIDUSK",
    "name": "Stridusk",
    "family": 42,
    "stage": 1,
    "design": "long gaiters and worn sole tail",
    "habitat": "Muddy Doorsteps",
    "entry": "It leaves pairs of tracks even when it walks alone. It now tends a small territory of its own."
  },
  {
    "number": 127,
    "id": "TARNIT",
    "name": "Tarnit",
    "family": 43,
    "stage": 0,
    "design": "silver cheek plate",
    "habitat": "Covered Mirrors",
    "entry": "It looks for faces in mirrors that have been covered for years. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 128,
    "id": "MIRRAVEL",
    "name": "Mirravel",
    "family": 43,
    "stage": 1,
    "design": "oval mirror mane with missing reflection",
    "habitat": "Covered Mirrors",
    "entry": "It looks for faces in mirrors that have been covered for years. It now tends a small territory of its own."
  },
  {
    "number": 129,
    "id": "BROLIP",
    "name": "Brolip",
    "family": 44,
    "stage": 0,
    "design": "folded umbrella crest",
    "habitat": "Rainy Steps",
    "entry": "It lends its shelter to anyone waiting outside a locked door. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 130,
    "id": "PARASOLM",
    "name": "Parasolm",
    "family": 44,
    "stage": 1,
    "design": "wide torn parasol hood",
    "habitat": "Rainy Steps",
    "entry": "It lends its shelter to anyone waiting outside a locked door. It now tends a small territory of its own."
  },
  {
    "number": 131,
    "id": "KNOTTOT",
    "name": "Knottot",
    "family": 45,
    "stage": 0,
    "design": "knotted tail",
    "habitat": "Rope Bridge",
    "entry": "It holds fraying bridges together with its own body. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 132,
    "id": "ROPELORN",
    "name": "Ropelorn",
    "family": 45,
    "stage": 1,
    "design": "braided body and hand shaped root ends",
    "habitat": "Rope Bridge",
    "entry": "It holds fraying bridges together with its own body. It now tends a small territory of its own."
  },
  {
    "number": 133,
    "id": "MOSSLIT",
    "name": "Mosslit",
    "family": 46,
    "stage": 0,
    "design": "moss cap horns",
    "habitat": "Memory Grove",
    "entry": "It carries traces of old forests into new clearings. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 134,
    "id": "ANTLERUE",
    "name": "Antlerue",
    "family": 46,
    "stage": 1,
    "design": "hanging moss antler curtains",
    "habitat": "Memory Grove",
    "entry": "It carries traces of old forests into new clearings. It now tends a small territory of its own."
  },
  {
    "number": 135,
    "id": "SCABBET",
    "name": "Scabbet",
    "family": 47,
    "stage": 0,
    "design": "bandage stripe",
    "habitat": "Still Marsh",
    "entry": "It feeds on spoiled sap and binds the cracks it leaves behind. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 136,
    "id": "SCARLEECH",
    "name": "Scarleech",
    "family": 47,
    "stage": 1,
    "design": "scarlet segmented suction cloak",
    "habitat": "Still Marsh",
    "entry": "It feeds on spoiled sap and binds the cracks it leaves behind. It now tends a small territory of its own."
  },
  {
    "number": 137,
    "id": "CINDRILL",
    "name": "Cindrill",
    "family": 48,
    "stage": 0,
    "design": "coal nose",
    "habitat": "Cold Furnace",
    "entry": "It hums into cold furnaces until one ember answers. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 138,
    "id": "COALCHANT",
    "name": "Coalchant",
    "family": 48,
    "stage": 1,
    "design": "furnace grate chest and ember claws",
    "habitat": "Cold Furnace",
    "entry": "It hums into cold furnaces until one ember answers. It now tends a small territory of its own."
  },
  {
    "number": 139,
    "id": "CRUMBAT",
    "name": "Crumbat",
    "family": 49,
    "stage": 0,
    "design": "flour dust wings",
    "habitat": "Empty Bakery",
    "entry": "It saves crumbs in rafters through the leanest seasons. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 140,
    "id": "LOAFLORN",
    "name": "Loaflorn",
    "family": 49,
    "stage": 1,
    "design": "bread crust wing ridges",
    "habitat": "Empty Bakery",
    "entry": "It saves crumbs in rafters through the leanest seasons. It now tends a small territory of its own."
  },
  {
    "number": 141,
    "id": "MISTCALF",
    "name": "Mistcalf",
    "family": 50,
    "stage": 0,
    "design": "fog tuft forehead",
    "habitat": "Cloud Pasture",
    "entry": "It gathers wandering herds by following their breath in the mist. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 142,
    "id": "FOGAURO",
    "name": "Fogauro",
    "family": 50,
    "stage": 1,
    "design": "great curling frost horns",
    "habitat": "Cloud Pasture",
    "entry": "It gathers wandering herds by following their breath in the mist. It now tends a small territory of its own."
  },
  {
    "number": 143,
    "id": "PELLIP",
    "name": "Pellip",
    "family": 51,
    "stage": 0,
    "design": "bellows throat pouch",
    "habitat": "Abandoned Forge",
    "entry": "It breathes air onto dying coals when the wind has stopped. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 144,
    "id": "BELLOWSOUL",
    "name": "Bellowsoul",
    "family": 51,
    "stage": 1,
    "design": "long leather fan wings",
    "habitat": "Abandoned Forge",
    "entry": "It breathes air onto dying coals when the wind has stopped. It now tends a small territory of its own."
  },
  {
    "number": 145,
    "id": "VEILOOK",
    "name": "Veilook",
    "family": 52,
    "stage": 0,
    "design": "long translucent veil and sideways watching eye",
    "habitat": "North Forest",
    "entry": "It watches the space beside you. Nobody remembers its arrival. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 146,
    "id": "LORNKEY",
    "name": "Lornkey",
    "family": 53,
    "stage": 0,
    "design": "key shaped antennae and floating hollow lock body",
    "habitat": "Abandoned Lab",
    "entry": "It turns toward doors that someone has left unfinished. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 147,
    "id": "DESIDRA",
    "name": "Desidra",
    "family": 54,
    "stage": 0,
    "design": "branching glass horns and hollow luminous chest",
    "habitat": "Desiderium",
    "entry": "It approaches places where longing has outlasted every living witness. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 148,
    "id": "ANEMORA",
    "name": "Anemora",
    "family": 55,
    "stage": 0,
    "design": "windblown flower skirt and empty seed lantern",
    "habitat": "Anemoia Ruins",
    "entry": "It blooms when someone remembers a home differently than it was. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 149,
    "id": "STILLUNE",
    "name": "Stillune",
    "family": 56,
    "stage": 0,
    "design": "crescent shell enclosing a suspended water bead",
    "habitat": "Moon Reservoir",
    "entry": "Its water remains perfectly still even beneath falling rain. It is still learning to trust unfamiliar footsteps."
  },
  {
    "number": 150,
    "id": "VESPERANT",
    "name": "Vesperant",
    "family": 57,
    "stage": 0,
    "design": "six candle legs and narrow ceremonial wing cloak",
    "habitat": "Twilight Boundary",
    "entry": "It gathers at dusk where a path has yet to be chosen. It is still learning to trust unfamiliar footsteps."
  }
];
const attacks={NORMAL:['TACKLE','SWIFT','BODY_SLAM'],GHOST:['LICK','NIGHT_SHADE','CONFUSE_RAY'],PSYCHIC_TYPE:['CONFUSION','PSYBEAM','PSYCHIC_M'],FIRE:['EMBER','FLAMETHROWER','FIRE_BLAST'],WATER:['WATER_GUN','BUBBLEBEAM','SURF'],GRASS:['VINE_WHIP','RAZOR_LEAF','MEGA_DRAIN'],BUG:['LEECH_LIFE','TWINEEDLE','PIN_MISSILE'],POISON:['POISON_STING','ACID','SLUDGE'],ROCK:['ROCK_THROW','ROCK_SLIDE','ROCK_SLIDE'],GROUND:['SAND_ATTACK','DIG','EARTHQUAKE'],ICE:['AURORA_BEAM','ICE_BEAM','BLIZZARD'],ELECTRIC:['THUNDERSHOCK','THUNDERBOLT','THUNDER'],FIGHTING:['LOW_KICK','DOUBLE_KICK','SUBMISSION'],FLYING:['PECK','WING_ATTACK','SKY_ATTACK'],DRAGON:['WRAP','DRAGON_RAGE','SLAM']};
G.NOCTURNE_REGIONAL_DEX=entries;
G.nocturneRoster=entries.map(e=>e.id);
for(const e of entries){
 const f=families[e.family],s=e.stage,last=s===f.names.length-1;
 const seed=e.family, tier=f.names.length===1?2:s;
 const stats=[44,38,42,38,43].map((v,i)=>v+tier*23+((seed*(i+3)+i*7)%19)-9);
 const a=attacks[f.types[0]],b=attacks[f.types[1]||f.types[0]];
 const learn=[[7,b[0]],[12,'SWIFT'],[18,a[1]],[24,b[1]],[32,'REST'],[40,a[2]],[48,b[2]]];
 G.DATA.species[e.id]={id:e.id,name:e.name.toUpperCase(),hp:stats[0],atk:stats[1],def:stats[2],spd:stats[3],spc:stats[4],types:f.types.slice(),catchRate:tier===0?225:tier===1?120:65,baseExp:58+tier*65,growth:'MEDIUM_FAST',moves1:['TACKLE',a[0]],learn,evos:last?[]:[{type:'level',level:s===0?18+(seed%5):36+(seed%7),to:f.names[s+1].toUpperCase()}],tmhm:['TOXIC','REST','SUBSTITUTE'],dex:154+e.number,cat:f.shape.toUpperCase(),ht:[1+tier,4+seed%8],wt:70+tier*240+seed*9};
 G.DATA.dexOrder[154+e.number]=e.id;G.DEX_TEXT[e.id]=e.entry;
 G.defMon(e.id,G.nocturneSprite(e,f));
}
// Glim's existing opening encounter remains gentle and save-compatible.
Object.assign(G.DATA.species.GLIM,{hp:38,atk:35,def:38,spd:48,spc:42,catchRate:255,moves1:['TACKLE','GROWL']});
})(window.G);

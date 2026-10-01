'use strict';
const assert=require('assert'),H=require('./headless'),G=H.loadGame().G;
const roster=G.NOCTURNE_REGIONAL_DEX;
assert.equal(roster.length,150);assert.equal(new Set(roster.map(e=>e.id)).size,150);
const ids=new Set(roster.map(e=>e.id)),numbers=new Set(roster.map(e=>e.number));assert.equal(numbers.size,150);
let edges=0;const art=new Set();
for(const e of roster){
 const d=G.DATA.species[e.id];assert.equal(d.dex,154+e.number);assert.equal(G.DATA.dexOrder[d.dex],e.id);
 assert(d.types.every(t=>G.TYPE_COL[t]));assert(d.moves1.every(m=>G.DATA.moves[m]));assert(d.learn.every(l=>G.DATA.moves[l[1]]));
 assert(G.DEX_TEXT[e.id]);assert(!['BULBASAUR','CHARMANDER','SQUIRTLE'].includes(e.id));
 for(const evo of d.evos){assert(ids.has(evo.to));assert(evo.level>1);edges++;let cur=evo.to,visited=new Set([e.id]);while(cur){assert(!visited.has(cur));visited.add(cur);cur=G.DATA.species[cur].evos[0]?.to;}}
 const mon=new G.Mon(e.id,50);assert(mon.hp>0);assert(mon.moves.length>0);
 for(const side of ['front','back','icon'])assert(G.pokeSprite(e.id,side));
 art.add(JSON.stringify(G.MONDEFS[e.id]));
}
assert.equal(edges,92);assert.equal(art.size,150);
assert.equal(G.DATA.species.GLIM.catchRate,255);assert.equal(G.DATA.species.BULBASAUR_NOCTURNE.name,'BULBASAUR');
console.log('PASS: 150 distinct roster IDs and sprite definitions, 58 families, 92 acyclic level evolutions, valid types/moves, all three sprite views, opening compatibility.');

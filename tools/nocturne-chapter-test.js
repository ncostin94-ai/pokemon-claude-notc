'use strict';
const assert=require('assert'),H=require('./headless');H.runFrames=(G,n)=>{for(let i=0;i<n;i++)G.engine.step();};
const T=require('./drive').make('?map=EastPath_Nocturne&x=30&y=10'),G=T.G,S=G.S;
function settle(){assert.notEqual(T.settle(false,6000),-1,'script stalled');}
function go(x,y){const route=S.findPath(G.ow.player,x,y);assert.notEqual(route,null,`unreachable ${G.state.map}:${x},${y}`);T.walk(route);settle();}
function read(x,y){for(const [dx,dy,dir]of [[0,1,'up'],[0,-1,'down'],[-1,0,'right'],[1,0,'left']]){if(S.findPath(G.ow.player,x+dx,y+dy)!==null){go(x+dx,y+dy);G.ow.player.dir=dir;T.press('a');settle();return;}}throw Error('unreachable sign');}
function exit(x,y,name){go(x,y);assert.equal(G.state.map,name);}
function reload(){assert(G.saveGame());G.state=G.loadSave();G.ow.load(G.state.map,G.state.x,G.state.y,G.state.dir);settle();}
settle();G.setFlag('NC_BALLS');G.state.party=[new G.Mon('GLIM',17)];
// A caught Glim is the chapter gate; the mandatory real capture is covered by opening tests.
go(32,10);assert.equal(G.state.map,'EastPath_Nocturne');G.dexCaught('GLIM');T.press('select');settle();assert(T.log.some(t=>t.includes('Follow East Path')));exit(32,10,'PathOfGrief');
assert.equal(G.state.griefCrossings||0,0);reload();read(24,5);exit(46,7,'Desiderium');assert.equal(G.state.griefCrossings,1);assert(G.flag('NC_DESIDERIUM'));
exit(1,13,'PathOfGriefRemembered');exit(1,7,'EastPath_Nocturne');assert.equal(G.state.griefCrossings,2);reload();exit(32,10,'PathOfGriefFamiliar');exit(20,7,'Desiderium');assert.equal(G.state.griefCrossings,2);
exit(7,10,'DesideriumCenter');G.state.party[0].hp=1;read(6,2);assert.equal(G.state.party[0].hp,G.state.party[0].maxhp);assert.equal(G.state.lastHealTown.map,'Desiderium');exit(6,9,'Desiderium');
exit(28,10,'DesideriumMart');const money=G.state.money;read(6,2);assert.equal(G.state.money,money-200);assert(G.bag.count('POKE_BALL')>0);exit(6,9,'Desiderium');
exit(7,21,'DesideriumGym');go(6,3);G.ow.player.dir='up';T.press('a');
for(let i=0;i<500&&T.top().constructor.name!=='Menu';i++)T.press('a');assert.equal(T.top().constructor.name,'Menu');T.press('a');settle();assert(G.flag('NC_BADGE'));assert(G.state.badges.includes('BOULDERBADGE'));assert.equal(G.bag.count('TM_BIDE'),1);read(6,2);assert.equal(G.bag.count('TM_BIDE'),1);exit(6,9,'Desiderium');
exit(28,21,'DesideriumHouse');read(9,2);assert(G.flag('NC_PHOTO'));assert(!G.state.companionOrigin?.revealed);exit(6,9,'Desiderium');
exit(36,13,'Stillwood');G.state.party[0].hp=1;read(12,4);assert.equal(G.state.party[0].hp,G.state.party[0].maxhp);read(29,23);const potions=G.bag.count('POTION');read(29,23);assert.equal(G.bag.count('POTION'),potions);reload();
// Every encounter slot exists; no encounters on the Path, roads or interiors.
const placed=new Set();for(const n of ['EastPath_Nocturne','Stillwood']){const d=G.MAPDATA.maps[n],w=G.DATA.wild[d.cnst];assert.equal(w.grass.mons.length,10);for(const [lv,sp]of w.grass.mons){assert(G.DATA.species[sp]);assert(lv>=4&&lv<=18);placed.add(sp);}}assert.equal(placed.size,14);
const originalBattle=G.startWildBattle;let encounter=null;G.startWildBattle=function*(sp,lv){encounter=[sp,lv];};
G.noEncounters=false;const oldRandom=Math.random;Math.random=()=>0;
try{
 for(const n of ['PathOfGrief','PathOfGriefRemembered','PathOfGriefFamiliar','DesideriumCenter'])assert(!G.encounters.check(G.maps.getMap(n),2,7));
 assert(!G.encounters.check(G.maps.getMap('Stillwood'),12,13));
 // Real player movement enters tall grass and calls the encounter dispatcher.
 G.ow.load('Stillwood',3,9,'up');settle();T.walk('U');assert.deepEqual(encounter,['FERNIP',11]);
 G.ow.load('EastPath_Nocturne',5,8,'up');settle();T.walk('U');assert.deepEqual(encounter,['GLIM',5]);
}finally{Math.random=oldRandom;G.startWildBattle=originalBattle;G.noEncounters=true;}
// Actual battle awards EXP across the first evolution threshold and runs the evolution UI.
G.ow.load('Stillwood',12,13,'down');settle();const mon=new G.Mon('GLIM',17);mon.exp=mon.expToNext()-1;mon.replaceMove(0,'BODY_SLAM');G.state.party=[mon];
G.spawnScript(G.startWildBattle('FERNIP',2,{noBlackout:true}),'evolution-test');settle();assert.equal(mon.species,'LUMOURN');assert(mon.level>=18);reload();assert.equal(G.state.party[0].species,'LUMOURN');
// Defeat recovery uses the newly visited Center, rather than the starter town.
G.state.lastHealTown={map:'Desiderium',x:7,y:11};G.spawnScript(G.blackout(),'chapter-blackout');settle();assert.equal(G.state.map,'Desiderium');assert(G.state.party.every(m=>m.hp===m.maxhp));
assert.equal(G.maps.getMap('AnemoiaTown').d.display,'PALLET TOWN');assert.equal(G.maps.getMap('AnemoiaTown_Nocturne').d.display,'ANEMOIA');
// All exits have walkable destination spawns and every authored map renders.
for(const [name,d]of Object.entries(G.MAPDATA.maps)){if(!d.realm)continue;const m=G.maps.getMap(name);G.mapRender.get(m);for(const e of d.exits||[]){assert(G.maps.getMap(e.to).passable(e.tx,e.ty),`${name}: blocked destination`);}}
G.ow.load('Desiderium',18,13,'down');settle();H.shot(G,'/tmp/desiderium.png');G.ow.load('Stillwood',12,13,'up');settle();H.shot(G,'/tmp/stillwood.png');
console.log('PASS: chapter gate, three shortening traversals and save persistence, Center, shop, one-time badge/TM, Oak photo, rest/cache, 14 encounter species, real grass movement dispatch, actual battle EXP/evolution/save, banners, 25 map renders.');

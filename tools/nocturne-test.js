// Runs real movement/interaction dispatch, story state, saves and combat headlessly.
'use strict';
const assert=require('assert'),H=require('./headless');
// Rendering is verified below; navigation does not need every frame rasterized.
H.runFrames=(G,n)=>{for(let i=0;i<n;i++)G.engine.step();};
const originalLoad=H.loadGame;
H.loadGame=opts=>{const ctx=originalLoad(opts);let seed=42;ctx.Math=Object.create(Math);ctx.Math.random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};return ctx;};
const T=require('./drive').make();
const G=T.G,S=G.S;
function settle(){assert.notEqual(T.settle(false,4500),-1,'script stalled');}
function goto(x,y){
  const p=G.ow.player, route=S.findPath(p,x,y);assert.notEqual(route,null,`unreachable ${G.state.map} ${x},${y}`);const map=G.state.map;T.walk(route);if(G.state.map===map){assert.equal(G.ow.player.x,x);assert.equal(G.ow.player.y,y);}
}
function face(dir){G.ow.player.dir=dir;}
function read(x,y){const p=G.ow.player;for(const [dx,dy,dir] of [[0,1,'up'],[0,-1,'down'],[-1,0,'right'],[1,0,'left']]){const r=S.findPath(p,x+dx,y+dy);if(r!==null){goto(x+dx,y+dy);face(dir);T.press('a');settle();return;}}throw Error('Cannot read '+x+','+y);}
function goExit(x,y,map){goto(x,y);settle();assert.equal(G.state.map,map);}
function reload(){assert(G.saveGame());const st=G.loadSave();assert(st);G.state=st;G.ow.load(st.map,st.x,st.y,st.dir);settle();}
settle();assert.equal(G.state.map,'AnemoiaHome');
// Goal hint and home exit.
T.press('select');settle();assert(T.log.some(t=>t.includes('Visit Oak')));
goExit(6,9,'AnemoiaTown');
// Forest and east route are genuinely gated.
goto(20,3);T.walk('U');assert.equal(G.state.map,'AnemoiaTown');
goto(36,13);T.walk('R');assert.equal(G.state.map,'AnemoiaTown');
goExit(25,21,'AnemoiaLab');goto(6,8);settle();assert(G.flag('NC_ACCIDENT'));assert(!S.actor('RIVAL'));reload();assert(!S.actor('RIVAL'));
goExit(6,11,'AnemoiaTown');goExit(7,10,'AnemoiaHome');read(9,6);assert(G.flag('NC_RESTED'));
goExit(6,9,'AnemoiaTown');goExit(20,2,'NorthForest');read(20,5);assert.equal(G.state.map,'NorthForest_Nocturne');assert.equal(G.state.realm,'nocturne');
read(17,5);assert.equal(G.state.party.length,1);assert.equal(G.state.starter,'BULBASAUR_NOCTURNE');assert.equal(G.state.companionOrigin.kind,'rival');assert(!G.state.companionOrigin.revealed);
reload();read(17,5);assert.equal(G.state.party.length,1);
// Lab stays locked until the forest key; glasses are optional, not a portal switch.
goExit(20,32,'AnemoiaTown_Nocturne');goto(25,22);T.walk('U');assert.equal(G.state.map,'AnemoiaTown_Nocturne');
goExit(20,2,'NorthForest_Nocturne');read(24,15);assert(G.flag('NC_KEY'));reload();
goExit(20,32,'AnemoiaTown_Nocturne');goExit(25,21,'AnemoiaLab');assert.equal(G.state.realm,'waking');assert(G.flag('NC_HINGE'));assert(!S.actor('OAK'));assert(!S.actor('RIVAL'));
goExit(6,11,'AnemoiaTown');goExit(7,10,'AnemoiaHome');assert(G.flag('NC_EMPTY_HOME'));assert(!S.actor('MOTHER'));
// The doorway itself is reversible. No terminal activation is required.
goExit(6,9,'AnemoiaTown');goExit(25,21,'AnemoiaLab_Nocturne');assert.equal(G.state.realm,'nocturne');reload();goExit(6,11,'AnemoiaTown_Nocturne');
goExit(25,21,'AnemoiaLab');assert.equal(G.state.realm,'waking');goExit(6,11,'AnemoiaTown');
goExit(25,21,'AnemoiaLab_Nocturne');goExit(6,11,'AnemoiaTown_Nocturne');
goExit(20,2,'NorthForest_Nocturne');read(22,7);assert(G.flag('NC_BALLS'),JSON.stringify({log:T.log.slice(-4),map:G.state.map,realm:G.state.realm,empty:G.flag('NC_EMPTY_HOME'),pos:[G.ow.player.x,G.ow.player.y,G.ow.player.dir]}));assert.equal(G.bag.count('POKE_BALL'),5);
goExit(20,32,'AnemoiaTown_Nocturne');goExit(37,13,'EastPath_Nocturne');
// Complete a real capture through the battle UI; do not fabricate a dex entry.
read(9,10);assert(!G.state.dex.caught.GLIM,'first attempt should faint Glim');
T.press('a');
let caught=false,weakened=false;
for(let i=0;i<8000;i++){
  const t=T.top(),name=t&&t.constructor.name;
  if(name==='BattleScene'&&t.menu&&t.menu.kind==='action'){
    if(!weakened){if(t.menu.sel%2)T.press('left');if(t.menu.sel>=2)T.press('up');T.press('a');}
    else{if(t.menu.sel%2)T.press('left');if(t.menu.sel<2)T.press('down');T.press('a');}
  }else if(name==='BattleScene'&&t.menu&&t.menu.kind==='moves'){
    if(t.menu.sel!==1)T.press('right');T.press('a');weakened=true;
  }else if(name==='Menu'){
    const items=t.items.map(String);
    if(items.includes('FIGHT')){T.press('down');T.press('a');} // 2-column menu: down selects ITEM
    else if(items[0]==='YES'){T.press('down');T.press('a');}
    else T.press('a');
  }else if(name==='TextBox'||name==='BattleScene'||name==='Summary'||name==='BagScreen'||name==='DexPage')T.press('a');
  else if(G.scriptRunning||G.ow.locks)T.press('a');
  else {caught=!!G.state.dex.caught.GLIM;break;}
}
assert(caught,'capture did not finish: '+(T.top()&&T.top().constructor.name)+' '+T.log.slice(-4).join(' / '));assert(G.state.party.some(m=>m.species==='GLIM'));
goExit(1,10,'AnemoiaTown_Nocturne');goExit(7,23,'AnemoiaCenter_Nocturne');read(6,2);assert(!G.flag('NC_COMPLETE'));reload();assert(G.state.dex.caught.GLIM);assert(!T.log.some(t=>t.includes('OPENING COMPLETE')));
read(6,2);assert(G.state.party.every(m=>m.hp===m.maxhp));
// All authored maps render, all exits are reachable from their destination spawns.
for(const [name,d]of Object.entries(G.MAPDATA.maps)){if(!d.realm)continue;const m=G.maps.getMap(name);G.mapRender.get(m);for(const e of d.exits||[]){const dest=G.maps.getMap(e.to);assert(dest.passable(e.tx,e.ty),`blocked spawn ${e.to}`);}}
H.shot(G,'/tmp/nocturne-center.png');
console.log('PASS: full opening, gates, canonical starter, reversible inverse lab, real Glim capture, recovery terminal, save/load, 16 map renders.');

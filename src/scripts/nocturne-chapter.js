(function(G){
'use strict';
const S=G.S,flag=n=>S.flag('NC_'+n),set=n=>S.set('NC_'+n),maps=G.MAPDATA.maps;
const grief=()=>['PathOfGrief','PathOfGriefRemembered','PathOfGriefFamiliar'][Math.min(2,G.state.griefCrossings||0)];
function* travel(to,x,y){yield* S.warp(to,x,y,'down');G.ow.showBanner();}
function* cache(key,item,n,text){if(flag(key)){yield* S.say('Only a dry impression remains.');return;}if(!G.bag.add(item,n)){yield* S.say('There is no room in your bag. You leave it here.');return;}set(key);yield* S.say(text);}
const oldObjective=G.nocturneObjective;
G.nocturneObjective=()=>!G.state.dex.caught.GLIM?oldObjective():!flag('DESIDERIUM')?'Follow East Path in Nocturne into the mist.':!flag('PHOTO')?'Explore Desiderium. One house stands unlocked.':'Explore Stillwood east of Desiderium. Let your companions grow.';
// Grass must use semantic Nocturne collision, rather than the Kanto glitch engine's tile-byte test.
const oldBg=G.battleBgFor;
G.battleBgFor=(m,surfing)=>m.d.realm?(surfing?'water':m.d.nocturneInterior?'indoor':'grass'):oldBg(m,surfing);
const oldCheck=G.encounters.check;
G.encounters.check=function(m,x,y,surfing){
 if(!m.d.realm)return oldCheck.call(this,m,x,y,surfing);
 if(!G.state.party.length||!flag('BALLS')||G.noEncounters)return false;
 const w=G.DATA.wild[m.d.cnst];if(!w)return false;
 if(G.state.repel>0){G.state.repel--;if(!G.state.repel){G.spawnScript(S.say('REPEL\'s effect wore off.'));return true;}}
 const table=m.isGrass(x,y)?w.grass:surfing&&m.isWater(x,y)?w.water:null;
 if(!table||!table.rate||!table.mons.length||Math.floor(Math.random()*256)>=table.rate)return false;
 let roll=Math.floor(Math.random()*256),slot=0;
 for(let i=0;i<G.DATA.slotChances.length;i++){roll-=G.DATA.slotChances[i];if(roll<0){slot=i;break;}}
 const [lv,sp]=table.mons[slot];const lead=G.state.party.find(p=>p.hp>0);
 if(!lead||G.state.repel>0&&lv<lead.level)return false;
 G.spawnScript(G.startWildBattle(sp,lv),'wild');return true;
};
// Waking and shadow names, including town signs, agree with their banners.
for(const name of ['AnemoiaTown','AnemoiaTown_Nocturne']){
 const base=G.MAPSCRIPTS[name];base.sign.TOWN_SIGN=function*(){yield* S.say((name==='AnemoiaTown'?'PALLET TOWN':'ANEMOIA')+'\fHome and rival\'s house: north. Oak\'s lab: south. Center: southwest. Mart: southeast. North Forest: north road. East Path: east road.');};
}
const east=G.MAPSCRIPTS.EastPath_Nocturne,oldEastStep=east.step;
east.step=function(x,y){if(x===32&&y===10)return(function*(){if(!G.state.dex.caught.GLIM){yield* S.say('The mist swallows your footsteps. The little light on the road is still waiting.');yield* S.movePlayer('L');return;}G.state.griefEntry='west';yield* travel(grief(),2,7);})();return oldEastStep(x,y);};
Object.assign(east.sign,{
 EAST_BOUNDARY:function*(){yield* S.say('PATH OF GRIEF\fBeyond the mist: Desiderium. The road ahead is quiet.');},
 EAST_TRAIL:function*(){yield* S.say('The main road continues east. A gap between the trees leads to a small clearing north of here.');},
 EAST_CLEARING:function*(){yield* S.say('Six kinds of small movement disturb the grass. In the clearing, everything is still.');},
 EAST_CACHE:function*(){yield* cache('EAST_CACHE','POKE_BALL',3,'Three faded POKé BALLS are tucked beneath a root.');}
});
const common=G.MAPSCRIPTS.AnemoiaCenter_Nocturne.sign;
for(const name of ['PathOfGrief','PathOfGriefRemembered','PathOfGriefFamiliar','Desiderium','DesideriumCenter','DesideriumMart','DesideriumGym','DesideriumHouse','Stillwood']){
 const d=maps[name],path=name.startsWith('PathOfGrief');
 G.defMapScript(name,{
  enter(){G.state.realm='nocturne';if(path)return(function*(){const n=G.state.griefCrossings||0;yield* S.say(n===0?'The road stretches farther than you expected. Even your companion makes no sound.':n===1?'You recognize the stump. It seems closer to the far end this time.':'The distance has softened. You know where to place your feet.');})();if(name==='Desiderium'&&!flag('DESIDERIUM'))return(function*(){set('DESIDERIUM');yield* S.say('DESIDERIUM\fA town with its doors unlocked. A longing you cannot place. No one comes to meet you.');})();return null;},
  step(x,y){const e=d.exits.find(e=>e.x===x&&e.y===y);if(!e)return null;return(function*(){
   let to=e.to,tx=e.tx,ty=e.ty;
   if(path){const side=e.to==='Desiderium'?'east':'west';if(G.state.griefEntry&&side!==G.state.griefEntry)G.state.griefCrossings=Math.min(2,(G.state.griefCrossings||0)+1);delete G.state.griefEntry;}
   if(name==='Desiderium'&&to==='PathOfGrief'){to=grief();tx=maps[to].w-3;G.state.griefEntry='east';}
   yield* travel(to,tx,ty);
  })();},
  sign:Object.assign({},common,{
   HEAL_TERMINAL:function*(){for(const m of G.state.party)m.healFull();G.state.lastHealTown={map:'Desiderium',x:7,y:11};yield* S.say('The terminal is warm. Your companions recover. There is no attendant.');},
   GRIEF_MARKER:function*(){yield* S.say('An old stump beside the road. The air here holds no wild creatures.');},
   DESIDERIUM_SIGN:function*(){yield* S.say('DESIDERIUM\fCenter and Mart: north. Gym and unlocked house: south. Stillwood: east. Path of Grief: west.');},
   DESIDERIUM_CENTER_SIGN:function*(){yield* S.say('POKéMON CENTER. The recovery terminal still has power.');},
   DESIDERIUM_MART_SIGN:function*(){yield* S.say('MART. The door is unlocked.');},
   DESIDERIUM_GYM_SIGN:function*(){yield* S.say('GYM. No hours posted. No voices inside.');},
   STILLWOOD_SIGN:function*(){yield* S.say('STILLWOOD\fTall grass shelters stronger creatures. The clearing north of the entrance offers a place to rest.');},
   UNCLAIMED_BADGE:function*(){
    if(flag('BADGE')){yield* S.say('The velvet still bears the badge\'s outline. Nobody asked you to earn it.');return;}
    if(!G.bag.canAdd('TM_BIDE',1)){yield* S.say('A badge and a sealed TM rest on the table. Make room in your bag first.');return;}
    if(!(yield* S.ask('A badge and a TM rest on the table. There is no leader. Take them?')))return;
    if(!G.state.badges.includes('BOULDERBADGE'))G.state.badges.push('BOULDERBADGE');G.bag.add('TM_BIDE',1);set('BADGE');
    yield* S.say('You take the BOULDERBADGE and TM BIDE.\fThere was no battle. No applause. Your companion watches your hand.');
   },
   GYM_RECORD:function*(){yield* S.say('The challengers\' book has no names. The last page is neatly ruled and entirely blank.');},
   OAK_PHOTO:function*(){set('PHOTO');yield* S.say('A photograph: a younger Oak beside a boy. His son.\fOak has one hand on the boy\'s shoulder. Both are smiling.\fThe glass is clean. Someone has kept this picture carefully.');},
   HOUSE_NOTE:function*(){yield* S.say('A note beneath a pressed leaf: "I keep the door open. I know how that sounds."');},
   STILLWOOD_REST:function*(){for(const m of G.state.party)m.healFull();yield* S.say('You sit by the stump. Your companions settle around you.\fAfter a quiet rest, they are ready to walk again.');},
   STILLWOOD_CACHE:function*(){yield* cache('STILLWOOD_CACHE','POTION',2,'Two sealed POTIONS lie beneath the leaves.');},
   STILLWOOD_MEMORY:function*(){yield* S.say('Saplings grow through an old orchard fence. Something small is tending their roots.');},
   STILLWOOD_EDGE:function*(){yield* S.say('The trees grow thick beyond this clearing. For now, you turn back toward the paths you know.');}
  })
 });
}
// Bide is usable by regional species; the gift is functional without forcing a quest.
for(const id of G.nocturneRoster)if(!G.DATA.species[id].tmhm.includes('BIDE'))G.DATA.species[id].tmhm.push('BIDE');
})(window.G);
